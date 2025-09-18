import { id } from "zod/v4/locales";
import audioFile from "/files/audio.mp3";
import docFile from "/files/doc.pdf";
import imageFile from "/files/image.png";
import videoFile from "/files/video.mp4";
import { slugify } from "../../mock/functions";

export const mockCourse = {
  id: slugify("Gukumira ikwirakwizwa rya virusi itera SIDA"),
  author: "Dr. NIZEYIMANA A. Felix",
  duration: "5h 00m",
  rating: 4.8,
  title: "Gukumira ikwirakwizwa rya virusi itera SIDA",
  description:
    "Iri somo rigamije gutanga ubumenyi bwimbitse ku gukumira ikwirakwizwa rya virusi itera SIDA no kwita ku bayirwaye, hanibandwa ku kurwanya akato n’ihezwa rikorerwa abafite virusi.",
  chapters: [
    {
      id: "ch1",
      title: "Imbumbe 1: Ubumenyi rusange ku ndwara ya SIDA",
      subchapters: [
        {
          id: "ch1-sc1",
          title: "Virusi itera SIDA na SIDA ubwayo",
          content: `
            <h2>Virusi itera SIDA ni iki?</h2>
            <p>VIH (Virusi Itera SIDA) ni virusi igabanya ubudahangarwa bw’umubiri. Iyo umuntu ayanduye, igenda yongera ubukana buhindura ubushobozi bw’umubiri bwo kwirinda indwara.</p>
            <h3>SIDA ni iki?</h3>
            <p>SIDA ni icyiciro cya nyuma cy’ingaruka za VIH, aho umurwayi aba atagifite ubushobozi bwo kwirwanaho ku ndwara nkeya nk’inkorora cyangwa indwara zandura zisanzwe.</p>
            <h3>Uko bigira ingaruka ku buzima</h3>
            <p>Abantu benshi bashobora kuba bafite virusi ntibagaragaze ibimenyetso imyaka myinshi. Ni yo mpamvu ari ingenzi kwipimisha, kuko iyo itamenyekanye hakiri kare, igira ingaruka zikomeye.</p>
            <h3>Uburyo bwo kuyirinda</h3>
            <p>Gukoresha agakingirizo, kwirinda gusangira inshinge, no kwipimisha kenshi bifasha mu kuyikumira no kwirinda gukwirakwiza virusi.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch1-sc2",
          title: "Uburyo VIH yandura",
          content: `
            <h2>Uko VIH yandura</h2>
            <p>VIH yandurira mu maraso, amasohoro, amazi ava mu myanya ndangagitsina, n’amata y’umubyeyi.</p>
            <ul>
              <li>Imibonano mpuzabitsina idakingiye</li>
              <li>Gusangira ibikoresho by'inshinge cyangwa ibyuma bitacyuye isuku</li>
              <li>Gutera amaraso yanduye</li>
              <li>Umubyeyi wanduye ashobora kwanduza umwana mu gihe atwite, abyara cyangwa amwonsa</li>
            </ul>
            <h3>Ibihuha bikwiye kumvwa neza</h3>
            <p>VIH ntiyandurira mu gukoranaho, gusangira ibikoresho byo kurya, gukoranaho mu buryo busanzwe cyangwa kujya ku musarane umwe.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch1-sc3",
          title: "Akamaro ko kwipimisha",
          content: `
            <h2>Kuki kwipimisha ari ingenzi?</h2>
            <p>Kwipimisha bituma umuntu amenya uko ahagaze hakiri kare. Iyo wipimishije kare kandi bikagaragara ko ufite VIH, ushobora gutangira ART vuba, bikakurinda kurwara SIDA.</p>
            <h3>Uburyo bwo kwipimisha</h3>
            <ul>
              <li>Kwipimisha ku bushake</li>
              <li>Kwipimisha mu bigo nderabuzima</li>
              <li>Kwipimisha wenyine ukoresheje ibikoresho byabugenewe (self-testing kits)</li>
            </ul>
            <h3>Inyungu</h3>
            <p>Kumenya uko uhagaze bituma wirinda gukwirakwiza virusi no gufata icyemezo gikwiye ku buzima bwawe.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch1-sc4",
          title: "Kurwanya akato n’ihezwa",
          content: `
            <h2>Kurwanya akato</h2>
            <p>Abantu benshi bafite VIH bakunze guhezwa cyangwa gusuzugurwa, bigatuma batinya kwipimisha cyangwa kujya kwivuza.</p>
            <h3>Ingaruka z’akato</h3>
            <ul>
              <li>Ubwigunge no kwiheba</li>
              <li>Kunanirwa kubona serivisi z’ubuzima</li>
              <li>Kudafatwa nk’abandi mu muryango cyangwa aho bakorera</li>
            </ul>
            <h3>Gukumira akato</h3>
            <p>Dukwiye kubaha abantu bafite VIH, kubafasha kubona ubuvuzi, no kubaha amahirwe angana n’ay’abandi. Kwimakaza ubumuntu n’uburenganzira bwa muntu ni inkingi y’ingenzi mu kurwanya SIDA.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch2",
      title: "Imbumbe 2: Kwirinda no gukumira ikwirakwizwa",
      subchapters: [
        {
          id: "ch2-sc1",
          title: "Uburyo bwo kwirinda VIH",
          content: `
            <h2>Uko twakwirinda VIH</h2>
            <p>Kwirinda VIH bisaba kumenya uburyo yandura no kugendera kure imyitwarire ishobora guteza ibyago.</p>
            <ul>
              <li>Gukoresha agakingirizo neza mu gihe cy’imibonano mpuzabitsina</li>
              <li>Kwikingiza PrEP (Pre-Exposure Prophylaxis)</li>
              <li>Kwikebesha/gusiramura ku bushake</li>
              <li>Kwirinda gusangira ibikoresho bikomeretsa nk’inshinge</li>
            </ul>
            <h3>Uburezi n’ubukangurambaga</h3>
            <p>Kuganira ku ndwara ya VIH mu muryango no mu mashuri bifasha abantu kumenya no kurinda ubuzima bwabo.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch2-sc2",
          title: "Kurinda umwana kwanduzwa n’umubyeyi",
          content: `
            <h2>Kurinda umwana kwandura</h2>
            <p>Gahunda ya PMTCT (Prevention of Mother-To-Child Transmission) igamije gufasha abagore batwite bafite VIH kurinda abana babo kwandura.</p>
            <h3>Ibikorwa bikorwa</h3>
            <ul>
              <li>Kwipimisha igihe cyose utwite</li>
              <li>Kwitabira gahunda y’ubuvuzi bwa ART</li>
              <li>Kubyara kwa muganga no gukurikiranwa</li>
              <li>Guhabwa inama ku bijyanye no konsa umwana</li>
            </ul>
            <p>Iyo ibi byose bikozwe neza, ibyago byo kwanduza umwana bigabanuka cyane, bikagera no munsi ya 2%.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
    {
      id: "ch3",
      title:
        "Imbumbe 3: Indwara zandurira mu mibonano n’izindi ndwara zifatana na VIH",
      subchapters: [
        {
          id: "ch3-sc1",
          title: "Indwara zandurira mu mibonano mpuzabitsina (STIs)",
          content: `
            <h2>STIs ni izihe?</h2>
            <p>STIs ni indwara zandurira mu mibonano mpuzabitsina zirimo chlamydia, gonorrhea, syphilis, herpes n’izindi.</p>
            <h3>Impamvu STIs zifitanye isano na VIH</h3>
            <ul>
              <li>STIs zituma uruhu rw’imyanya ndangagitsina rwangirika, bikorohera VIH kwinjira</li>
              <li>Hari ubwo umuntu afite STIs ariko ntazi ko ayifite, bigatuma ayikwirakwiza atabizi</li>
            </ul>
            <p>Ni ingenzi kwipimisha STIs kenshi no kuvurwa hakiri kare.</p>
          `,
          video: videoFile,
          audio: audioFile,
        },
        {
          id: "ch3-sc2",
          title: "Hepatite B na C",
          content: `
            <h2>Hepatite B na C</h2>
            <p>Ni virusi zibasira umwijima, zikaba zandurira binyuze mu maraso n’imibonano mpuzabitsina, kimwe na VIH.</p>
            <h3>Impamvu zifatanya na VIH</h3>
            <p>Abafite VIH bafite ibyago byinshi byo kwandura hepatite kuko ubudahangarwa bwabo buba bwaragabanutse. Kuvura kimwe bidakuraho ikibazo cy’ikindi.</p>
            <h3>Kwirinda</h3>
            <ul>
              <li>Kwikingiza (Hepatite B ifite urukingo)</li>
              <li>Kwirinda gusangira ibikoresho bikomeretsa</li>
              <li>Kwirinda imibonano mpuzabitsina idakingiye</li>
            </ul>
          `,
          video: videoFile,
          audio: audioFile,
        },
      ],
    },
  ],
};
