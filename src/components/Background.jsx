export default function Background() {
    return (
        <>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 -left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
        </>
    )
}