/*
 * Dayung Duo static build configuration.
 *
 * CONTROLLER_BASE_URL: URL publik folder build controller (harus HTTPS saat
 * game di-host di itch.io). Bisa juga diubah dari tombol "Atur URL halaman HP"
 * di lobi; nilai dari tombol itu disimpan di localStorage browser.
 *
 * SIGNALING: opsional. Kosongkan (null) untuk memakai PeerJS Cloud.
 * Isi host/port/path jika memakai PeerServer sendiri.
 */
window.DAYUNG_CONFIG = {
  SIGNALING: null,
  ICE_SERVERS: [
    { urls: 'stun:stun.l.google.com:19302' }
  ]
};
