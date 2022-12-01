const Footer = () => {
    const today = new Date();

    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
            <br />
            <a href="https://www.youtube.com/watch?v=RVFAyFWO4go">
                Vídeo Tutorial Youtube - Inglês
            </a>
            <br />
            <a href="https://github.com/almcarvalho/reactchuva">
                Código fonte.
            </a>
        </footer>
    )
}

export default Footer