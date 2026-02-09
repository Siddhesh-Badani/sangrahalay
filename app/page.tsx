export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Sangrahalay</h1>
      <p className="meta">Siddhesh’s Archive of Quiet Works</p>

      <p>
        This is a quiet archive of writing, reflection, and unfinished thought.
        It is not a feed, not a blog, and not a performance.
      </p>

      <p className="font-hindi">
        संग्रहालय एक शांत संग्रह है, जिसमें लेखन, चिंतन और अधूरे विचार शामिल हैं। यह एक फ़ीड नहीं है, न ही एक ब्लॉग, और न ही एक प्रदर्शन।
      </p>

      <p>
        Browse through <a href="#">Sūtra</a>, reflect in <a href="#">Vichār</a>,
        follow a <a href="#">Kathā</a>, explore a <a href="#">Saṅgrah</a>, or
        open the <a href="#">Paṭa</a>.
      </p>

      <nav style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <a className="nav-item" href="#">
          <span className="nav-icon">●</span>
          Sūtra
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon">●</span>
          Vichār
        </a>
        <a className="nav-item" href="#">
          <span className="nav-icon">●</span>
          Kathā
        </a>
      </nav>
    </main>
  );
}
