const PlayIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 5.25 10.5 6-10.5 6V5.25Z"
    />
  </svg>
);

const VideoPlaceholder = ({ title, note }) => (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose to-sky p-8 text-text-dark shadow-card">
    <div className="absolute right-[-50px] top-[-20px] h-48 w-48 rounded-full bg-white/30 blur-3xl" />
    <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-inner">
        <PlayIcon className="h-8 w-8 text-coral" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-text-muted">
          Vídeo em produção com instrutor certificado. Em breve você poderá salvar e compartilhar
          esta demonstração com a sua equipe.
        </p>
      </div>
      {note ? (
        <span className="rounded-full bg-white/70 px-4 py-1 text-xs font-medium text-text-muted">
          {note}
        </span>
      ) : null}
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-coral shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
      >
        Receber atualização
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0-15-15 15" />
        </svg>
      </button>
    </div>
  </div>
);

const YouTubeEmbed = ({ url, title }) => (
  <div className="relative overflow-hidden rounded-3xl bg-black shadow-card">
    <div className="aspect-video">
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  </div>
);

const VideoPlayer = ({ video, title }) => {
  if (!video) {
    return <VideoPlaceholder title={title} />;
  }

  if (video.type === 'youtube' && video.url) {
    return <YouTubeEmbed url={video.url} title={title} />;
  }

  return <VideoPlaceholder title={title} note={video.note} />;
};

export default VideoPlayer;

