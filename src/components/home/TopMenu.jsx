import { toast } from "react-toastify";
import { useLang } from "../../context/LangContext";
import { useNavigate } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";

const TopMenu = () => {
  const { lang, setLang } = useLang();

  const user = localStorage.getItem("loggedInUser");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    toast.success("Çıkış başarıyla gerçekleşti!");
    navigate("/signIn");
    window.location.reload();
  };
  return (
    <div className="flex items-center gap-3 justify-end">
      <div className="flex items-center gap-1">
        {user && (
          <>
            <span className="text-sm dark:text-[#fafafa]">
              {user.toUpperCase()}
            </span>
            <MdExitToApp
              onClick={handleLogout}
              className="w-6 h-6 dark:text-[#fafafa]"
            />
          </>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded   cursor-pointer ${
            lang === "en"
              ? "bg-blue-500 text-[#fafafa]"
              : " border border-[#252b42] text-[#252b42] dark:border-[#fafafa] dark:text-[#fafafa]"
          }`}
        >
          EN
        </button>

        <button
          onClick={() => setLang("tr")}
          className={`px-3 py-1 rounded  cursor-pointer ${
            lang === "tr"
              ? "bg-blue-500 text-[#fafafa]"
              : "border border-[#252b42] text-[#252b42] dark:border-[#fafafa] dark:text-[#fafafa]"
          }`}
        >
          TR
        </button>
      </div>
    </div>
  );
};

export default TopMenu;
