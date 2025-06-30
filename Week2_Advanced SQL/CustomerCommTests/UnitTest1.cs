using NUnit.Framework;
using CustomerCommLib;

namespace CustomerCommTests
{
    public class UnitTest1
    {
        [Test]
        public void TestSendMail()
        {
            var mailSender = new MailSender(); // uses the class implementing IMailSender
            var customerComm = new CustomerComm(mailSender);
            bool result = customerComm.SendMailToCustomer("Gowri Nandhini", "Hello!");

            TestContext.WriteLine("Result: " + result);
            Assert.That(result, Is.True);
        }
    }
}
