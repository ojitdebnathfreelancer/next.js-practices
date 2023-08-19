import RootLayout from "../../components/Layouts/RootLayout";

const Contact = () => {
  return <div>This is contact page</div>;
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
