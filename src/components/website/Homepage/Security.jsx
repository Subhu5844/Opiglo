import React from 'react'

const Security = () => {
    return (
        <div className="flex items-center justify-center m-8 mt-0">
            <div className="bg-teal-100 shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-medium text-center text-blue-950 pb-8">
                    Security & Compliance:{" "}
                    <span className="text-teal-600">Industry Standards & Certifications</span>
                </h1>
                <p className="mt-4">
                    At <strong>OPIGLO (Pty) LTD</strong>, we prioritize security and compliance in
                    the petroleum industry. Our certifications and adherence to industry
                    standards ensure quality and safety for our diesel products.
                </p>
                <div className='pl-4'>
                    <div className="mt-6">
                        <h2 className="font-bold text-md">Certifications:</h2>
                        <ul className="ml-6 mt-2 list-disc">
                            <li><span className='font-bold'>ISO 9001:2015:</span> Quality management system.</li>
                            <li><span className='font-bold'>ISO 14001:2015:</span> Environmental management.</li>
                            <li><span className='font-bold'>OHSAS 18001:</span> Occupational health and safety.</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-bold text-md">Regulatory Compliance:</h2>
                        <ul className="ml-6 mt-2 list-disc">
                            <li>Fully compliant with South African Department of Energy regulations.</li>
                            <li>Registered with SAQCC Gas for safe fuel handling.</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h2 className="font-bold text-md">Security Measures:</h2>
                        <ul className="ml-6 mt-2 list-disc">
                            <li>Advanced cybersecurity protocols to protect data.</li>
                            <li>State-of-the-art physical security at our facilities.</li>
                        </ul>
                    </div>
                </div>

                <p className="mt-6">
                    These standards reflect <span className='font-bold'>OPIGLO's</span> commitment to providing safe,
                    reliable, and high-quality petroleum products while safeguarding our customers
                    and the environment.
                </p>

            </div>
        </div>
    )
}

export default Security
