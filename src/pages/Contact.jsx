import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const Contact = () => {

  const handleSubmit = (values) => {
    alert('پیام شما با موفقیت ارسال شد')
    console.log(values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'نام باید حداقل ۲ کاراکتر باشد').required('وارد کردن نام الزامی میباشد'),
    email: Yup.string().email('فرمت وارد شده برای ایمیل صحیح نمیباشد').required('وارد کردن ایمیل الزامی میباشد'),
    message: Yup.string().min(10, 'حداقل تعداد کاراکتر های وارد شده برای پیام ۱۰ کاراکتر میباشد').required('وارد کردن پیام الزامی است')
  })

  return (
    <div>
      <h1>تماس با من</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">نام</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name='name' component="div" className='text-red-500' />
          </div>
          <div>
            <label htmlFor="email">ایمیل</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name='email' component="div" className='text-red-500' />
          </div>
          <div>
            <label htmlFor="message">پیام</label>
            <Field type="text" id="message" name="message" />
            <ErrorMessage name='message' component="div" className='text-red-500' />
          </div>
          <button type='submit'>ارسال پیام</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Contact