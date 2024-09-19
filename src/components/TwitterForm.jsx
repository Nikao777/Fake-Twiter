import "../components/TwitterForm.css"
export default function TwitterForm () {
    return(
        <div className="max-w-xl border-b border-gray-800 p-4">
            <textarea placeholder="What is happening?" className="placeholder:text-twitter-ligh-gray w-full h-48 bg-transparent text-xl resize-none outline-none"></textarea>
        </div>
    )
}