/**
 * Utility to generate and trigger download of a vCard (.vcf)
 * for Okechineke Success Chiemerie
 */
export function downloadVCard() {
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Chiemerie;Okechineke;Success;;',
    'FN:Okechineke Success Chiemerie',
    'ORG:Ocean Technologies',
    'TITLE:CEO & Lead Software Engineer',
    'EMAIL;type=INTERNET;type=WORK;type=pref:okechineke0@gmail.com',
    'TEL;type=CELL;type=VOICE;type=pref:+2348146578477',
    'TEL;type=WORK;type=VOICE:08146578477',
    'URL;type=WORK:https://ocean-f4gj.onrender.com/',
    'NOTE:Computer Science student at ESUT Agbani (2024 — Till Now) | Ex-CIITA Awgu Developer | CEO of Ocean Technologies',
    'ADR;type=WORK:;;Enugu State;Agbani;;Nigeria',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Okechineke_Success_Chiemerie.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
