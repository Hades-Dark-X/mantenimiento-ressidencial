import { FaFacebookF, FaXTwitter, FaPinterestP } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 hidden md:flex">
      {/* Enlace de Facebook */}
      <a
        href="https://www.facebook.com/tu_perfil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="w-6 h-6 text-foreground" />
      </a>

      {/* Enlace de Twitter */}
      <a
        href="https://twitter.com/tu_perfil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="w-6 h-6 text-foreground" />
      </a>

      {/* Enlace de Pinterest */}
      <a
        href="https://www.pinterest.com/tu_perfil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPinterestP className="w-6 h-6 text-foreground" />
      </a>
    </div>
  );
}
