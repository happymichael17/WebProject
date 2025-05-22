import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "lucide-react";

export default function CaseStudiesDetails() {
    return (
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-4">
            {/* Main Content Section */}
            <div className="flex-1">
                {/* Introduction */}
                <div className="mb-8">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        The E-CITIZEN platform stands as one of the most transformative digital solutions for the Government of Kenya.
                        Developed by Webmasters Kenya Ltd, this platform has revolutionized how citizens access and interact with government
                        services, making processes faster, more transparent, and more convenient. It serves as a prime example of how digital
                        transformation in the public sector can improve efficiency, accountability, and service delivery.
                    </p>
                </div>

                {/* Challenge Section */}
                <div className="mb-8">
                    <h3 className="text-gray-700 font-medium mb-3">Challenge</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Before the development of eCitizen Kenya, accessing government services was often a time-consuming, complex, and
                        inefficient process. Citizens had to visit various government offices in person, deal with lengthy paperwork, and face long
                        queues. This not only frustrated citizens but also created inefficiencies within government departments, leading to delays
                        in service delivery and a lack of transparency.The Government of Kenya needed a centralized, secure, and efficient digital
                        platform to streamline the provision of key services. They sought a solution that would allow citizens to access
                        government services online, reduce bureaucracy, and improve the overall experience of interacting with government
                        agencies.
                    </p>
                </div>

                {/* Image Section */}
                <div className="my-8 rounded-4xl overflow-hidden">
                    <img
                        src="/ecitizen_details2.svg"
                        alt="Team collaborating on digital solutions"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Solution Section */}
                <div className="mb-8">
                    <h3 className="text-gray-700 font-medium mb-3">Solution</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Webmasters Kenya Ltd was tasked with designing, developing, and implementing a one-stop online platform that
                        provides access to a wide range of government services. Our team worked closely with government stakeholders to
                        understand their needs and ensure the platform met the highest standards of efficiency, security, and user-friendliness.
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-6">
                    <a href="#" className="text-yellow-500 hover:text-yellow-600">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-yellow-500 hover:text-yellow-600">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-yellow-500 hover:text-yellow-600">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="text-yellow-500 hover:text-yellow-600">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-yellow-500 hover:text-yellow-600">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>

            {/* Related Articles Sidebar */}
            <div className="md:w-72 w-full">
                <div className="border border-gray-100 rounded-lg p-4 shadow-sm">
                    <h3 className="text-red-500 font-medium mb-4">Related Articles</h3>

                    <div className="space-y-4">
                        <div className="pb-4 border-b border-gray-100">
                            <a href="#" className="text-sm text-gray-800 hover:text-red-500 hover:underline">
                                The Government of Kenya Platform Stands as One of the most Transformative Digital Solutions
                            </a>
                        </div>

                        <div className="pb-4 border-b border-gray-100">
                            <a href="#" className="text-sm text-gray-800 hover:text-red-500 hover:underline">
                                The Government of Kenya Platforms Stands as One of most Transformative Digital Solutions
                            </a>
                        </div>

                        <div className="pb-4 border-b border-gray-100">
                            <a href="#" className="text-sm text-gray-800 hover:text-red-500 hover:underline">
                                Reflecting on the 12th Annual Africa Evidence Summit
                            </a>
                        </div>

                        <div>
                            <a href="#" className="text-sm text-gray-800 hover:text-red-500 hover:underline">
                                The Government of Kenya Platforms Stands as One of most Transformative Digital Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}