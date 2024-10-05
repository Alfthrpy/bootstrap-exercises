export default function Footer(){
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p className="mb-0">© {new Date().getFullYear()} Nama Perusahaan. All rights reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="text-white">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text-white">Terms of Service</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="text-white">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}