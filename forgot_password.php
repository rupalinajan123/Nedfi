<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Forgot_password extends CI_Controller
{

  public function __construct()
  {
    parent::__construct();
    $this->load->model('Master_model');
    $this->load->library('email');
  }

  public function index()
  {
    $this->data['middle_content'] = 'employer/forgot_password';
    $this->load->view('common_view', $this->data);
  }

  // Step 1: Handle Email Submission & Send OTP
  public function sendOTP()
{
    
    header('Content-Type: application/json');

    $email = $this->input->post('email', TRUE);

    if (empty($email)) {
        echo json_encode(['success' => false, 'message' => 'Email is required.']);
        return;
    }

    $user = $this->Master_model->getRecords('employer_registration', ['email' => $email]);

    if ($user) {
        $otp = rand(100000, 999999);
        $this->session->set_userdata('reset_otp', $otp); // Update session key to match `verify_otp`

        // Email configuration
        $config = array(
            'protocol'    => 'smtp',
            'smtp_host'   => '115.124.98.69',
            'smtp_port'   => '25',
            'smtp_crypto' => 'tls',
            'smtp_user'   => 'rupalinajan01@gmail.com',
            'smtp_pass'   => 'Rupali@123',
            'mailtype'    => 'html',
            'charset'     => 'utf-8',
            'newline'     => "\r\n",
        );

        $this->load->library('email', $config);

        $this->email->from('rupalinajan01@gmail.com', 'testmail');
        $this->email->to($email);
        $this->email->subject('Password Reset OTP');
        $this->email->message('Your OTP is: ' . $otp);

        if ($this->email->send()) {
            echo json_encode(['success' => true, 'message' => 'OTP sent successfully.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to send OTP.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Email not registered.']);
    }
}


 
  // Step 2: Verify OTP
  public function verify_otp()
{
    header('Content-Type: application/json');
    $otp = $this->input->post('otp');  // Get OTP from request
    $email = $this->input->post('email'); //  Ensure email is received
    $session_otp = $this->session->userdata('reset_otp'); 

    if (empty($otp) || empty($email)) {
        echo json_encode(['status' => 'error', 'message' => 'OTP and Email are required']);
        return;
    }

    if ($otp == $session_otp) {
        //  Set email in session after OTP verification
        $this->session->set_userdata('reset_email', $email);

        // Debugging - Check if email is stored correctly
        log_message('debug', 'Email stored in session: ' . $this->session->userdata('reset_email'));

        echo json_encode(['status' => 'success', 'message' => 'OTP verified']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid OTP']);
    }
}

public function reset_password()
{
    $password = $this->input->post('password');
    $confirm_password = $this->input->post('confirm_password');
    $email = $this->session->userdata('reset_email');

    if (empty($email)) {
        echo json_encode(['status' => 'error', 'message' => 'Session expired, try again']);
        return;
    }

    if (empty($password) || empty($confirm_password)) {
        echo json_encode(['status' => 'error', 'message' => 'Both password fields are required']);
        return;
    }

    if ($password !== $confirm_password) {
        echo json_encode(['status' => 'error', 'message' => 'Passwords do not match']);
        return;
    }

    $hashed_password = sha1($password); // Hash the password correctly

    $update = $this->db->where('email', $email)->update('employer_registration', [
        'password' => $hashed_password
    ]);

    if ($update) {
        $this->session->unset_userdata('reset_otp');
        $this->session->unset_userdata('reset_email');
        echo json_encode([
            'status' => 'success', 
            'message' => 'Password reset successfully', 
            'redirect' => base_url('Employer/login') // Send redirect URL
        ]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update password']);
    }
}

}