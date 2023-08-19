import DashboardLayout from "../../components/Layouts/DashboardLayout";
import RootLayout from "../../components/Layouts/RootLayout";

const Admin = () => {
  return <div>This is admin page</div>;
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
