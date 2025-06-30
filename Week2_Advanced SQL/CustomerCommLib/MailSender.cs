using System;

namespace CustomerCommLib
{
    // 1. Define the interface
    public interface IMailSender
    {
        bool SendMail(string toAddress, string message);
    }

    // 2. Implement the interface
    public class MailSender : IMailSender
    {
        public bool SendMail(string toAddress, string message)
        {
            Console.WriteLine($"Mail sent to {toAddress} with message: {message}");
            return true;
        }
    }

    // 3. Use the interface in CustomerComm
    public class CustomerComm
    {
        private readonly IMailSender _mailSender;

        public CustomerComm(IMailSender mailSender)
        {
            _mailSender = mailSender;
        }

        public bool SendMailToCustomer(string email, string message)
        {
            return _mailSender.SendMail(email, message);
        }
    }
}
