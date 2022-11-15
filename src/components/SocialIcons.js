import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function SocialIcons() {
    return (
        <div>
            <li>
                <a href="https://twitter.com">
                <FaTwitter />
                </a>
                
            </li>
            <li>
                <a href="https://facebook.com">
                <FaFacebook />
                </a>
                
            </li>
            <li>
                <a href="https://linkedin.com">
                <FaLinkedin />
                </a>
                
            </li>
            <li>
                <a href="https://instagram.com">
                <FaInstagram />
                </a>
                
            </li>
        </div>
    )
}
