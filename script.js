const linkInput = document.getElementById('link');
const downloadButton = document.getElementById('download');
const resultDiv = document.getElementById('result');

downloadButton.addEventListener('click', async () => {
  const link = linkInput.value;
  if (!link) return;

  try {
    const response = await fetch(`https:                                          
    const data = await response.json();
    const mediaUrl = data.thumbnail_url;

    if (mediaUrl) {
      const mediaType = data.type;
      if (mediaType === 'photo') {
        const photoUrl = mediaUrl.replace('s150x150', 's1080x1080');
        resultDiv.innerHTML = `<a href="${photoUrl}" download>Download Foto</a>`;
      } else if (mediaType === 'video') {
        const videoUrl = data.media_url;
        resultDiv.innerHTML = `<a href="${videoUrl}" download>Download Video</a>`;
      }
    }
  } catch (error) {
    resultDiv.innerHTML = 'Gagal mengunduh';
  }
});
