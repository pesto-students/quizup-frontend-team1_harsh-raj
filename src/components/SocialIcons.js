import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function SocialIcons() {
    return (
        <div>
            <li>
                <a href="https://twitter.com" >
                    <FaTwitter color="#FFD05A" />
                </a>

            </li>
            <li>
                <a href="https://facebook.com">
                    <FaFacebook color="#FFD05A" />
                </a>

            </li>
            <li>
                <a href="https://linkedin.com">
                    <FaLinkedin color="#FFD05A" />
                </a>

            </li>
            <li>
                <a href="https://instagram.com">
                    <FaInstagram color="#FFD05A" />
                </a>

            </li>
        </div>
    )
}
