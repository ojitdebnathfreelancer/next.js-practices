import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        src="https://www.epfl.ch/campus/services/website/wp-content/uploads/2020/07/error404-en.png"
        alt="error"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ErrorPage;
