import Container from "react-bootstrap/esm/Container";
import { FaFacebookF, FaInstagram, FaPinterest, FaSkype, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <Container className="my-3">
                <div className="flex sm:items-center items-start justify-between gap-3 flex-col sm:flex-row">
                    <div className="text-gray-500 flex items-center justify-center gap-6">
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]">Blog</span>
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]">FAQs</span>
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]">Contact us</span>
                    </div>
                    <div className="text-gray-500 flex items-center justify-center gap-3">
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]"><FaFacebookF /></span>
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]"><FaTwitter /></span>
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]"><FaInstagram /></span>
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]"><FaSkype /></span>
                        <span className="ease-in transition-all duration-150 hover:text-[#fe4c50]"><FaPinterest /></span>
                    </div>
                </div>
                <div className="text-gray-500 my-5">
                    ©2018 All Rights Reserverd. This template is made with ❤️ by <span className="text-[#fe4c50]">Colorlib</span>
                </div>
            </Container>
        </>
    )
}