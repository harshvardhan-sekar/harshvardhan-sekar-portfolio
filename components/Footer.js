export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/harshvardhan-sekar" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/harshvardhan-sekar/" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:sekar6@illinois.edu" className="footer-social-link" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://drive.google.com/drive/folders/1AXhb6GebVKAux7dnES2nw7B6RJAysFgu?usp=sharing" className="footer-social-link" target="_blank" rel="noopener noreferrer" title="Resume">
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
        <p className="footer-text">© 2026 Harshvardhan Sekar. All rights reserved.</p>
      </div>
    </footer>
  )
}
