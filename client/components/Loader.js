import { useEffect } from "react";

export default function Loader({
  countdown,
  setCountdown,
  loading,
  setLoading,
}) {
  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          }
          clearInterval(timer);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [loading]);
  return (
    <div className="text-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      <p className="mt-4 text-lg font-semibold">Loading jobs...</p>
      <p className="text-gray-600">
        The server is on a free tier and may take a moment to wake up.
      </p>
      <p className="text-gray-600">
        Estimated time remaining: {countdown} seconds
      </p>
    </div>
  );
}
