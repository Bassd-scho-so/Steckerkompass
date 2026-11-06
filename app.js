const connectors = [
{
 id:"iso1724", voltage:"12 V", name:"7-polig Anhänger – ISO 1724 (Typ N)",
 family:"Anhänger / Pkw", standard:"ISO 1724", description:"Klassischer 7-poliger Anschluss für die Grundbeleuchtung von Anhängern.",
 pins:[
 [1,"L","Gelb","Blinker links","1,5 mm²"],[2,"54g","Blau","Nebelschlussleuchte","1,5 mm²"],[3,"31","Weiß","Masse für Kontakte 1–8","2,5 mm²"],[4,"R","Grün","Blinker rechts","1,5 mm²"],[5,"58R","Braun","Schluss-/Begrenzungslicht rechts","1,5 mm²"],[6,"54","Rot","Bremslicht","1,5 mm²"],[7,"58L","Schwarz","Schluss-/Begrenzungslicht links","1,5 mm²"]
 ],
 note:"Die ISO-1724-Farben sind die üblichen genormten Leitungsfarben. Bei Reparaturen trotzdem die vorhandene Leitung prüfen.",
 images:{socket:"https://commons.wikimedia.org/wiki/Special:FilePath/1-1111-Anhaeng_buchse_7-pol-ISO1724.jpg", socketSource:"https://commons.wikimedia.org/wiki/File:1-1111-Anhaeng_buchse_7-pol-ISO1724.jpg"}
},
{
 id:"iso11446", voltage:"12 V", name:"13-polig Anhänger – ISO 11446",
 family:"Anhänger / Pkw / Wohnwagen", standard:"ISO 11446", description:"13-poliger Anschluss mit Rückfahrlicht sowie getrennten Versorgungs- und Massekontakten.",
 pins:[
 [1,"L","Gelb","Blinker links","1,5 mm²"],[2,"54g","Blau","Nebelschlussleuchte","1,5 mm²"],[3,"31","Weiß","Masse für Kontakte 1–8","2,5 mm²"],[4,"R","Grün","Blinker rechts","1,5 mm²"],[5,"58R","Braun","Schluss-/Begrenzungslicht rechts","1,5 mm²"],[6,"54","Rot","Bremslicht","1,5 mm²"],[7,"58L","Schwarz","Schluss-/Begrenzungslicht links","1,5 mm²"],[8,"—","Rosa / Pink","Rückfahrleuchte","1,5 mm²"],[9,"30","Orange","Dauerplus","2,5 mm²"],[10,"15","Grau","Geschaltetes Plus / Ladeleitung","2,5 mm²"],[11,"31","Weiß / Schwarz*","Masse für Kontakt 10","2,5 mm²"],[12,"—","Nicht festgelegt","Reserve / herstellerspezifisch","—"],[13,"31","Weiß / Rot*","Masse für Kontakt 9","2,5 mm²"]
 ],
 note:"* Bei Kontakt 11/13 können Farbangaben je nach Kabelsatz bzw. Hersteller abweichen. Kontakt 12 ist nicht einheitlich belegt. Die drei Massekreise nicht beliebig zusammenlegen.",
 images:{plug:"https://commons.wikimedia.org/wiki/Special:FilePath/1-1111-Anhaeng_stecker_13-pol-teilweise_belegt_ISO11446.jpg", plugSource:"https://commons.wikimedia.org/wiki/File:1-1111-Anhaeng_stecker_13-pol-teilweise_belegt_ISO11446.jpg", socket:"https://commons.wikimedia.org/wiki/Special:FilePath/1-1111_13-pol_AHK-Steckdose_ge%C3%B6ffnet_mit_Nummerierung.jpg", socketSource:"https://commons.wikimedia.org/wiki/File:1-1111_13-pol_AHK-Steckdose_ge%C3%B6ffnet_mit_Nummerierung.jpg"}
},
{
 id:"iso1185", voltage:"24 V", name:"7-polig Lkw – ISO 1185 (Typ N, schwarz)",
 family:"Lkw / Nutzfahrzeug", standard:"ISO 1185", description:"24-V-Hauptbeleuchtung am Nutzfahrzeuganhänger.",
 pins:[
 [1,"31","Weiß","Masse","—"],[2,"58L","Schwarz","Stand-/Schlusslicht links","—"],[3,"L","Gelb","Blinker links","—"],[4,"54","Rot","Bremslicht","—"],[5,"R","Grün","Blinker rechts","—"],[6,"58R","Braun","Stand-/Schlusslicht rechts","—"],[7,"—","Blau","Zusatzfunktion Aux 2 / Bremskontrolle (systemabhängig)","—"]
 ],
 note:"24-V-System. Die Zusatzfunktion an Kontakt 7 ist anhand Fahrzeug-/Anhängerunterlagen zu verifizieren."
},
{
 id:"iso3731", voltage:"24 V", name:"7-polig Lkw – ISO 3731 (Typ S, weiß)",
 family:"Lkw / Nutzfahrzeug", standard:"ISO 3731", description:"Zusatzsteckverbindung im 24-V-Lkw-Bereich; nicht mit ISO 1185 verwechseln.",
 pins:[
 [1,"31","Weiß / Grün","Masse für Kontakte 9–15 des 15-poligen Systems","—"],[2,"—","Schwarz","Reserve / CAN-H je nach Ausführung","—"],[3,"—","Gelb","Rückfahrleuchte","—"],[4,"—","Rot","Allgemeine Stromversorgung (+)","—"],[5,"—","Grün","Reserve / CAN-L je nach Ausführung","—"],[6,"—","Braun","Aux 3 / Liftachse","—"],[7,"—","Blau","Nebelschlussleuchte","—"]
 ],
 note:"Die Zusatzfunktionen (insbesondere CAN/Reserve) sind fahrzeug- und aufbauabhängig. Nicht allein anhand der Farbe anklemmen."
},
{
 id:"iso12098", voltage:"24 V", name:"15-polig Lkw – ISO 12098",
 family:"Lkw / Nutzfahrzeug", standard:"ISO 12098", description:"Kombinierter 15-poliger 24-V-Anschluss für Beleuchtung und Zusatzfunktionen.",
 pins:[
 [1,"L","Gelb","Blinker links","—"],[2,"R","Grün","Blinker rechts","—"],[3,"—","Blau","Nebelschlussleuchte","—"],[4,"31","Weiß","Masse für Kontakte 1–8","—"],[5,"58L","Schwarz","Stand-/Schlusslicht links","—"],[6,"58R","Braun","Stand-/Schlusslicht rechts","—"],[7,"54","Rot","Bremslicht","—"],[8,"—","Rosa / Pink","Rückfahrleuchte","—"],[9,"—","Orange","Allgemeine Stromversorgung (+)","—"],[10,"—","Grau","Aux 1 / Verschleißanzeige","—"],[11,"—","Weiß / Schwarz","Aux 2 / Bremskontrolle Anhänger","—"],[12,"—","Weiß / Blau","Aux 3 / Liftachse","—"],[13,"31","Weiß / Rot","Masse für Kontakte 9–15","—"],[14,"—","Weiß / Grün","CAN-H / Datenkommunikation (Ausstattungsabhängig)","—"],[15,"—","Weiß / Braun","CAN-L / Datenkommunikation (Ausstattungsabhängig)","—"]
 ],
 note:"Zusatzfunktionen 10–12 und CAN-Leitungen nur nach dem konkreten Fahrzeug-/Aufbauplan anschließen. ISO 12098 ist ein 24-V-System."
}
];

const $ = s => document.querySelector(s);
const list = $("#connectorList"), details=$("#details"), search=$("#search");
let selected=connectors[0], side="plug", voltage="all";
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function renderList(){
 const q=search.value.toLowerCase();
 const items=connectors.filter(c=>(voltage==="all"||c.voltage===voltage) && (c.name+" "+c.family+" "+c.standard+" "+c.description).toLowerCase().includes(q));
 list.innerHTML=items.map(c=>`<button class="listitem ${c.id===selected.id?"active":""}" data-id="${c.id}">
 <span class="voltage">${c.voltage}</span><b>${esc(c.name)}</b><small>${esc(c.family)} · ${esc(c.standard)}</small></button>`).join("") || `<p class="muted pad">Keine passenden Anschlüsse gefunden.</p>`;
 list.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{selected=connectors.find(c=>c.id===b.dataset.id);side="plug";renderList();renderDetails();}));
}
function schematicMarkup(){
 const n=selected.pins.length, cols=n>10?5:4;
 const dots=selected.pins.map(p=>`<span class="schematic-pin"><b>${p[0]}</b></span>`).join("");
 return `<div class="schematic"><div class="schematic-face">${dots}</div><div class="schematic-caption">${n}-polige Anschlussdarstellung</div><small>Symbolische Übersicht – keine maßstäbliche oder normgerechte Kontaktseitenzeichnung.</small></div>`;
}
function visualMarkup(){
 const img=selected.images?.[side];
 if(img){
  const source=selected.images[side+"Source"];
  return `<div class="connector-visual"><div class="photo-frame"><img src="${img}" alt="${esc(selected.standard)} ${side==="plug"?"Stecker":"Steckdose"}" loading="lazy" onerror="this.parentElement.innerHTML='<p>Bild konnte nicht geladen werden.</p>'"></div><div class="photo-credit">Bildquelle: <a href="${source}" target="_blank" rel="noopener">Wikimedia Commons</a></div></div>`;
 }
 return `<div class="connector-visual">${schematicMarkup()}</div>`;
}
function renderDetails(){
 const rows=selected.pins.map(p=>`<tr><td class="pin">${p[0]}</td><td><b>${esc(p[1])}</b></td><td><span class="wire"><i class="swatch ${colorClass(p[2])}"></i>${esc(p[2])}</span></td><td>${esc(p[3])}</td><td>${esc(p[4])}</td></tr>`).join("");
 details.innerHTML=`<div class="detailhead"><div><div class="eyebrow">${esc(selected.standard)} · ${selected.voltage}</div><h2>${esc(selected.name)}</h2><p>${esc(selected.description)}</p></div><span class="pill">${selected.pins.length} Kontakte</span></div>
 <div class="sidebar"><span>Ansicht wählen:</span><button data-side="plug" class="${side==="plug"?"chosen":""}">Stecker</button><button data-side="socket" class="${side==="socket"?"chosen":""}">Dose</button></div>
 <div class="viewhint">${side==="plug"?"Steckeransicht":"Dosenansicht"} – jeweils die Kontaktseite, soweit ein passendes Foto verfügbar ist.</div>
 ${visualMarkup()}
 <div class="tablewrap"><table><thead><tr><th>Nr.</th><th>Klemme</th><th>Kabelfarbe</th><th>Funktion</th><th>Querschnitt*</th></tr></thead><tbody>${rows}</tbody></table></div>
 <p class="note"><b>Hinweis:</b> ${esc(selected.note)}</p>
 <p class="footnote">* Querschnitte sind nur dort angegeben, wo sie in der herangezogenen Belegung spezifiziert sind. Bei den 24-V-Systemen ist der Querschnitt aus dem Fahrzeug-/Aufbauplan zu übernehmen.</p>
 <button class="print" onclick="window.print()">Belegungsplan drucken</button>`;
 details.querySelectorAll("[data-side]").forEach(b=>b.addEventListener("click",()=>{side=b.dataset.side;renderDetails();}));
}
function colorClass(c){
 const s=c.toLowerCase();
 if(s.includes("gelb"))return "yellow"; if(s.includes("blau"))return "blue"; if(s.includes("weiß")||s.includes("weiss"))return "white";
 if(s.includes("grün"))return "green"; if(s.includes("braun"))return "brown"; if(s.includes("rot"))return "red";
 if(s.includes("schwarz"))return "black"; if(s.includes("rosa")||s.includes("pink"))return "pink"; if(s.includes("orange"))return "orange";
 if(s.includes("grau"))return "gray"; return "none";
}
search.addEventListener("input",renderList);
$("#voltage").addEventListener("change",e=>{voltage=e.target.value;renderList();});
renderList();renderDetails();
