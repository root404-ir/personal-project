import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';
const Contact = () => {

  const handleSubmit = (values, { resetForm }) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
      userEmail: values.email
    }
    emailjs.send('service_tgvrlqj', 'template_m5458kq', templateParams, 'DYfc28KrSjaXAHSRr')
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ارسال موفق",
          text: "با تشکر از پیام ارزشمندتون , پیام شما به ایمیل بنده ارسال شده است",
          showConfirmButton: true,
          timer: 1500
        });
        resetForm()
      })
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'نام باید حداقل 2 کاراکتر باشد').required('وارد کردن نام الزامی میباشد'),
    email: Yup.string().email('فرمت وارد شده برای ایمیل صحیح نمیباشد').required('وارد کردن ایمیل الزامی میباشد'),
    message: Yup.string().min(10, 'حداقل تعداد کاراکتر های وارد شده برای پیام 10 کاراکتر میباشد').required('وارد کردن پیام الزامی است')
  })

  return (
    <div className='flex flex-col items-center mt-10'>
      <div className='bg-white text-black px-10 py-5 w-96 rounded-lg'>
        <h1 className='text-center text-3xl'>تماس با من</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='mt-10'>
            <div className='flex flex-col'>
              <label htmlFor="name">نام</label>
              <Field type="text" id="name" name="name" className='border border-gray-400 rounded-sm' />
              <ErrorMessage name='name' component="div" className='text-red-500' />
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="email">ایمیل</label>
              <Field type="text" id="email" name="email" className='border border-gray-400 rounded-sm' />
              <ErrorMessage name='email' component="div" className='text-red-500' />
            </div>
            <div className='flex flex-col mt-5'>
              <label htmlFor="message">پیام</label>
              <Field type="text" id="message" name="message" className='border border-gray-400 rounded-sm' />
              <ErrorMessage name='message' component="div" className='text-red-500' />
            </div>
            <div className='flex justify-center'>
              <button type='submit' className='mt-5 bg-green-700 px-5 py-2 rounded-md text-white cursor-pointer hover:-translate-y-2 hover:bg-green-500  transition-all'>ارسال پیام</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Contact