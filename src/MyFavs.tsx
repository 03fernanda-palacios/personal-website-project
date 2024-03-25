import "./MyFavs.css";

function MyFavs() {
  return (
    <div className="my-favs">
      <h1>Fern's favs</h1>
      <iframe
        src="https://open.spotify.com/embed/episode/776Sr5qTjunPv2dNkQoODq?utm_source=generator&theme=0"
        width="300"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <br />
      <iframe
        src="https://open.spotify.com/embed/episode/46mpgVbpjoKGV2eNpxxpkV?utm_source=generator&theme=0"
        width="300"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <br />
      <iframe
        src="https://open.spotify.com/embed/episode/4ZWPqAHRJrc8BgvXJKt4hV?utm_source=generator&theme=0"
        width="300"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MyFavs;
