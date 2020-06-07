import { HtmlPagePublisherPlugin } from "@paperbits/common/publishing";
import { ISiteService } from "@paperbits/common/sites";
import { IntercomSettings } from "../publishing/intercomSettings";


export class IntercomHtmlPagePublisherPlugin implements HtmlPagePublisherPlugin {
    constructor(private readonly siteService: ISiteService) { }

    public async apply(document: Document): Promise<void> {
        const settings = await this.siteService.getSettings<any>();
        const intercomSettings: IntercomSettings = settings?.integration?.intercom;

        if (!intercomSettings?.appId) {
            return;
        }

        const settingsScriptElement = document.createElement("script");
        settingsScriptElement.innerHTML = `window.intercomSettings = { app_id: "${intercomSettings.appId}" };`;
        document.head.appendChild(settingsScriptElement);

        const bootstrapperScriptElement = document.createElement("script");
        bootstrapperScriptElement.innerHTML = `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/l560nd3j';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`;
        document.head.appendChild(bootstrapperScriptElement);
    }
}
