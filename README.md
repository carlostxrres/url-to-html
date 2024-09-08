# Ad-hoc Website Generator via URL Parameters

A way to create an ad-hoc website via URL parameters. The content, title, and favicon of the page can be dynamically set via query string parameters.

See it in action with these examples:

* [A page with some content](https://htmlrendererapi.s3.eu-west-3.amazonaws.com/index.html?html=%3Cheader%3E%3Ch1%3EWelcome%20to%20the%20URL-to-HTML%20Showcase%3C%2Fh1%3E%3Cnav%3E%3Cul%3E%3Cli%3E%3Ca%20href%3D%23section1%3EIntroduction%3C%2Fa%3E%3Cli%3E%3Ca%20href%3D%23section2%3EBasic%20Elements%3C%2Fa%3E%3Cli%3E%3Ca%20href%3D%23section3%3EForms%20and%20Media%3C%2Fa%3E%3Cli%3E%3Ca%20href%3D%23section4%3ETables%20and%20Lists%3C%2Fa%3E%3C%2Ful%3E%3C%2Fnav%3E%3C%2Fheader%3E%3Csection%20id%3Dsection1%3E%3Ch2%3EIntroduction%3C%2Fh2%3E%3Cp%3EThis%20is%20an%20ad-hoc%20website%20generated%20entirely%20through%20URL%20parameters.%20It%20is%20styled%20with%20%3Ca%20href%3Dhttps%3A%2F%2Fgithub.com%2Flkhrs%2Fsimple.css%20target%3D_blank%3ESimple-CSS%3C%2Fa%3E%20and%20secured%20using%20%3Ca%20href%3Dhttps%3A%2F%2Fgithub.com%2Fcure53%2FDOMPurify%20target%3D_blank%3EDOMPurify%3C%2Fa%3E.%3Cp%3EFor%20more%20information%2C%20along%20with%20the%20deceptively%20simple%20code%20behind%20this%20project%2C%20visit%20%3Ca%20href%3Dhttps%3A%2F%2Fgithub.com%2Fcarlostxrres%2Furl-to-html%20target%3D_blank%3Ethis%20repository%3C%2Fa%3E%20by%20%3Ca%20href%3Dhttps%3A%2F%2Fgithub.com%2Fcarlostxrres%20target%3D_blank%3Ecarlostxrres%3C%2Fa%3E.%20Its%20code%20has%20been%20uploaded%20to%20an%20AWS%20S3%20bucket%20so%20you%20can%20use%20it%20straight%20away.%3C%2Fsection%3E%3Csection%20id%3Dsection2%3E%3Ch2%3EBasic%20Elements%3C%2Fh2%3E%3Cp%3EHere%20are%20some%20basic%20%3Cabbr%20title%3D%22HyperText%20Markup%20Language%22%3EHTML%3C%2Fabbr%3E%20tags%20in%20action.%3Cblockquote%20cite%3Dhttps%3A%2F%2Fwww.w3.org%2FTR%2Fhtml52%2F%20%3E%22HTML%20is%20the%20standard%20markup%20language%20for%20creating%20web%20pages%20and%20web%20applications.%22%3C%2Fblockquote%3E%3Cul%3E%3Cli%3EText%20in%20%3Cstrong%3Ebold%3C%2Fstrong%3E%3Cli%3EText%20in%20%3Cem%3Eitalic%3C%2Fem%3E%3Cli%3EText%20with%20%3Cmark%20class%3Dhighlight%3Ehighlight%3C%2Fmark%3E%3Cli%3EA%20link%20to%20%3Ca%20href%3Dhttps%3A%2F%2Fwww.example.com%20target%3D_blank%3EExample%3C%2Fa%3E%3C%2Ful%3E%3Cp%3EThis%20is%20an%20%3Cdel%3Eold%20version%3C%2Fdel%3E%20of%20text%2C%20but%20this%20is%20the%20%3Cins%3Enew%20version%3C%2Fins%3E.%3Caside%3E%3Cp%3EThis%20is%20an%20%3Cstrong%3Easide%3C%2Fstrong%3E%20section%2C%20often%20used%20for%20extra%20information%20like%20side%20notes.%3C%2Faside%3E%3C%2Fsection%3E%3Csection%20id%3Dsection3%3E%3Ch2%3EForms%20and%20Media%3C%2Fh2%3E%3Cform%20action%3D%2Fsubmit%20method%3DPOST%3E%3Clabel%20for%3Dname%3EName%3A%3C%2Flabel%3E%20%3Cinput%20id%3Dname%20name%3Dname%20required%3E%3Cbr%3E%3Clabel%20for%3Demail%3EEmail%3A%3C%2Flabel%3E%20%3Cinput%20id%3Demail%20name%3Demail%20type%3Demail%3E%3Cbr%3E%3Clabel%20for%3Dgender%3EGender%3A%3C%2Flabel%3E%20%3Cinput%20id%3Dmale%20name%3Dgender%20type%3Dradio%20value%3Dmale%3E%20%3Clabel%20for%3Dmale%3EMale%3C%2Flabel%3E%20%3Cinput%20id%3Dfemale%20name%3Dgender%20type%3Dradio%20value%3Dfemale%3E%20%3Clabel%20for%3Dfemale%3EFemale%3C%2Flabel%3E%3Cbr%3E%3Clabel%20for%3Dcolor%3EFavorite%20Color%3A%3C%2Flabel%3E%20%3Cinput%20id%3Dcolor%20name%3Dcolor%20type%3Dcolor%3E%3Cbr%3E%3Clabel%20for%3Dmessage%3EMessage%3A%3C%2Flabel%3E%20%3Ctextarea%20cols%3D50%20id%3Dmessage%20name%3Dmessage%20rows%3D4%3E%3C%2Ftextarea%3E%3Cbr%3E%3Cinput%20type%3Dsubmit%20value%3DSubmit%3E%3C%2Fform%3E%3Cfigure%3E%3Cimg%20alt%3D%22Placeholder%20image%22src%3Dhttps%3A%2F%2Fplacehold.co%2F600x400%3E%3Cfigcaption%3EThis%20is%20an%20example%20image%20with%20a%20caption.%3C%2Ffigcaption%3E%3C%2Ffigure%3E%3Caudio%20controls%3E%3Csource%20src%3Dhttps%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F04%2FBeach_sounds_South_Carolina.ogg%20type%3Daudio%2Fogg%3EYour%20browser%20does%20not%20support%20the%20audio%20element.%3C%2Faudio%3E%3Cbr%3E%3Cvideo%20controls%20height%3D240%20width%3D320%3E%3Csource%20src%3Dhttps%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ftranscoded%2F4%2F4d%2FWikipedia_Edit_2014.webm%2FWikipedia_Edit_2014.webm.720p.vp9.webm%20type%3Dvideo%2Fwebm%3EYour%20browser%20does%20not%20support%20the%20video%20element.%3C%2Fvideo%3E%3C%2Fsection%3E%3Csection%20id%3Dsection4%3E%3Ch2%3ETables%20and%20Lists%3C%2Fh2%3E%3Ch3%3ETable%20Example%3C%2Fh3%3E%3Ctable%3E%3Cthead%3E%3Ctr%3E%3Cth%3EItem%3Cth%3EDescription%3Cth%3EPrice%3Ctbody%3E%3Ctr%3E%3Ctd%3EApple%3Ctd%3EFresh%20and%20juicy%20apple%3Ctd%3E%241.00%3Ctr%3E%3Ctd%3EBanana%3Ctd%3ERipe%20banana%3Ctd%3E%240.50%3Ctr%3E%3Ctd%3EOrange%3Ctd%3ESweet%20orange%3Ctd%3E%240.75%3C%2Ftable%3E%3Ch3%3EOrdered%20List%3C%2Fh3%3E%3Col%3E%3Cli%3EFirst%20item%3Cli%3ESecond%20item%3Cli%3EThird%20item%3C%2Fol%3E%3Ch3%3EUnordered%20List%3C%2Fh3%3E%3Cul%3E%3Cli%3EApple%3Cli%3EBanana%3Cli%3EOrange%3C%2Ful%3E%3Ch3%3EDefinition%20List%3C%2Fh3%3E%3Cdl%3E%3Cdt%3EHTML%3Cdd%3EA%20markup%20language%20for%20creating%20webpages.%3Cdt%3ECSS%3Cdd%3EA%20stylesheet%20language%20used%20to%20style%20webpages.%3C%2Fdl%3E%3C%2Fsection%3E%3Cfooter%3E%3Cp%3EYour%20cool%20footer%20could%20be%20here.%3C%2Ffooter%3E&title=Ad-hoc+site&emoji=🚀)

* [A simple `Hello world` page](https://htmlrendererapi.s3.eu-west-3.amazonaws.com/index.html?html=%3Ch1%3EMy%20title%3C%2Fh1%3E%3Cp%3EHi%3C%2Fp%3E&title=Ad-hoc+site&emoji=👋)

## Dependencies

* [Simple-CSS](https://github.com/lkhrs/simple.css): to classlessly style your HTML.
* [DOMPurify](https://github.com/cure53/DOMPurify): to prevent XSS attacks.

## Documentation

Here are the supported URL Parameters:

| Parameter | Description | Example |
|-----------|-----------------------------------------------------|-------------------------------------------|
| `html` | The HTML to be displayed on the page, URL-encoded. | `html=%3Ch1%3EHello+World%3C%2Fh1%3E` |
| `title` | The title of the webpage, shown in the browser tab. | `title=My+Webpage` |
| `favicon` | URL to an image used as the favicon. | `favicon=https://example.com/favicon.png` |
| `emoji` | Use an emoji as the favicon (overrides `favicon`). | `emoji=🚀` |
