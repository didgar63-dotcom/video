import {useState} from 'react'

export default function Home(){
  const [url,setUrl] = useState('https://www.youtube.com/watch?v=NAwcjwRRXbA');
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState(null);

  async function runDemo(){
    setLoading(true);
    setResult(null);
    try{
      const res = await fetch('/api/process_video', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({url})
      });
      const data = await res.json();
      setResult(data);
    }catch(e){
      setResult({error: e.message});
    }finally{ setLoading(false); }
  }

  return (<div className="container" dir="rtl" lang="fa">
    <h1>DidgarAcademy — Demo ویدئویی</h1>
    <p className="small">لطفاً لینک یوتیوب یا نمونه پیش‌فرض را وارد کنید. این نسخهٔ دمو برای استقرار فوری در Vercel آماده است.</p>
    <label>لینک یوتیوب (۱ دقیقه‌ای):</label>
    <input className="input" value={url} onChange={e=>setUrl(e.target.value)} />
    <div style={{marginTop:12}}>
      <button className="btn" onClick={runDemo} disabled={loading}>{loading? 'در حال پردازش...':'اجرای دمو'}</button>
      <a style={{marginLeft:10}} className="btn" href="/didgar_report_sample.pdf" download>دانلود PDF نمونه</a>
    </div>
    {result && <div style={{marginTop:16}}>
      <h3>خروجی دمو</h3>
      <div className="output">
        <strong>Job ID:</strong> {result.job_id || 'sample'}<br/>
        <strong>Transcript:</strong><br/>{result.transcript}<br/><br/>
        <strong>Translation (FA):</strong><br/>{result.translation_fa}<br/><br/>
        <strong>Analysis:</strong><br/>{JSON.stringify(result.analysis,null,2)}
      </div>
    </div>}
  </div>); }
