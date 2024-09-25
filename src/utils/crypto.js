const generateKey = async () => {
  const key = await crypto.subtle.generateKey(
    {
      name: "AES-GCM", // Algorithm to use
      length: 256, // Key length
    },
    true, // Can the key be extracted
    ["encrypt", "decrypt"] // Key usage
  );
  return key;
}
