export default function handler(req, res){
  // This is a mocked endpoint for demo on Vercel.
  // In production, replace logic with real processing: call Whisper, OCR, translation, generate PDF and store.
  const body = req.method === 'POST' ? req.body : {};
  const sample = {
    job_id: 'demo-sample-001',
    transcript: 'In this video we explain why the sky is blue. Sunlight scatters in the atmosphere due to Rayleigh scattering.',
    translation_fa: 'در این ویدئو توضیح می‌دهیم چرا آسمان آبی است. نور خورشید به دلیل پراکندگی رایلی در جو پراکنده می‌شود.',
    analysis: {
      scientific_accuracy: 'confirmed',
      keywords: ['sky','Rayleigh scattering','sunlight'],
      suggestions: ['Add a diagram showing scattering','Provide numerical examples']
    }
  };
  // simulate processing delay
  setTimeout(()=> res.status(200).json(sample), 900);
}