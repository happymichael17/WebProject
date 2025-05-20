export default function CaseStudiesDetails() {
    return(
        <section>
            <div className="flex flex-col items-center justify-center py-20 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Case Study Title</h1>
                <p className="text-lg text-gray-700 mb-8">A brief description of the case study goes here.</p>
                <img src="https://via.placeholder.com/800x400" alt="Case Study" className="mb-8 rounded-lg shadow-lg"/>
                <p className="text-lg text-gray-700 mb-4">Detailed information about the case study, including challenges, solutions, and results.</p>
            </div>
         </section>
    )
}