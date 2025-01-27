---
id: 04236b76-f979-40dd-8d02-f838842a328e
blueprint: page
title: Guide
page_builder:
  -
    id: m6as37rj
    lead_title: Documentation
    title: Guide
    description: |-
      Assemble your server and set up your AI voice assistant.
      <br>
      <a href="#hardware" class="btn-ghost">Hardware</a>
      <a href="#assembly" class="btn-ghost">Assembly</a>
      <a href="#onboarding" class="btn-ghost">Onboarding</a>
      <a href="#voice-assistant" class="btn-ghost">AI Voice Assistant Setup</a>
    type: hero
    enabled: true
  -
    id: m6as0xj2
    title: 'Select your hardware'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To turn your Sentinel Core into a full fledged AI home server, you will need to pair it with a few more components.'
    type: long_content
    enabled: true
    lead_title: 'Select your hardware'
    section_id: hardware
  -
    id: m6c355ee
    title: 'Selecting your AI workhorse'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The most important decision is the workhorse of this build, your GPU. Weather you are repurposing an old card or buying a new one, there are a few criteria to keep in mind.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'We currently recommend AMD Radeon RX 6000 and 7000 series graphics cards, due to their price to performance and high quality open source Linux drivers. Your card should have at least 8GB VRAM, but we recommend 16GB or more if you want to experiment with larger models.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You are of course encouraged to try other cards from the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://pipci.jeffgeerling.com/'
                  rel: null
                  target: _blank
                  title: null
            text: 'Raspberry Pi PCIe Database'
          -
            type: text
            text: ', and report results for cards not listed.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Other criteria to keep in mind are the cards idle/maximum power draw and its dimensions, which will affect the selection of your PSU and case.'
    reversible: true
    type: panels
    enabled: true
    lead_title: GPU
    image: gpu.png
  -
    id: m6c36moy
    lead_title: Case
    title: 'Find a fitting case'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Once you have selected a GPU, the next step is to find a fitting case. It is entirely possible to fit a Mini-ITX board into an ATX case you already own, but if you're buying a new Mini-ITX case, make note of the following criteria:"
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'It should fit your GPU, both in terms of the number of slots and the length of the card. Most cards these days are over 25cm long and two or more slots high, and not all Mini-ITX cases have room for that.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Make note of the type of PSU required, ATX or the smaller SFX.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Make note of the number of case fans supported or included. The Sentinel Core can drive up to two case fans.'
    reversible: true
    type: panels
    enabled: true
    image: case.png
  -
    id: m6c37had
    title: 'Delivering the power'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'The final component you will need is a power supply unit (PSU) that suits your GPU and case:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Check if your case needs an ATX or SFX PSU'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: "Check that the 12V wattage exceeds your GPU's maximum power draw (the Pi's 5V wattage is almost negligible)"
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Check that it has enough 6+2 PCIe power connectors (not all SFX PSUs do)'
      -
        type: horizontalRule
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Other factors you might want to consider:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'A modular supply allows for cleaner cable routing'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'High 80 Plus certification can indicate better power efficiency'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Low idle power (this can be a nontrivial part of your total idle power!)'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: '0 RPM fan control for low noise'
    reversible: true
    type: panels
    enabled: true
    lead_title: 'Power supply'
    image: 404.png
  -
    id: m6c37w9r
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'If you want to store a lot of media or big models, we recommend getting an USB 3 hard drive.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Of course, you can also look into Raspberry Pi HATs to enhance functionality or add a ZigBee dongle for extra connectivity.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You might also look into replacing your case fans with more silent ones for example.'
    reversible: true
    type: panels
    enabled: true
    lead_title: Optional
    image: 404.png
  -
    id: m6awojj6
    title: 'Putting it together'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Once you have all the parts it is time to build your AI home server. Your case should come with a manual that outlines the exact instructions for your particular case. But the general steps are usually as follows:'
    type: long_content
    enabled: true
    lead_title: Assambly
    section_id: assembly
  -
    id: m6c3y3ey
    lead_title: Assembly
    title: 'Putting it together'
    reversible: false
    type: panels
    enabled: true
    image: assambly.png
    content:
      -
        type: orderedList
        attrs:
          start: 1
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Remove the side panels from your case'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Mount the PSU in the designated location using the screws that come with the case'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Insert the IO faceplate into the back of the case'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Mount the Sentinel Core in the motherboard location of your case using the standoffs and screws supplied with the case'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Plug the 24-pin power connector from the PSU into the Sentinel Core'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Plug in any case fans into the 4-pin fan headers'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Plug the power button and status LEDs into the designated headers'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Remove the required amount of expansion slot covers from the case'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Insert the 8- or 6-pin PCIe power cables into your GPU'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'If your case uses a PCIe riser, insert it into the Sentinel Core and GPU'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Carefully insert the GPU into the PCIe slot/riser and the exposed expansion slots'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Close the side panels'
  -
    id: m6axdt5r
    title: 'First time login wizard'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Sentinel Core ships preinstalled with Home Assistant, so once assembled and turned on, you can proceed straight to '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://www.home-assistant.io/getting-started/onboarding/'
                  rel: null
                  target: _blank
                  title: null
            text: 'Onboarding Home Assistant'
          -
            type: text
            text: .
    type: long_content
    enabled: true
    lead_title: Onboarding
    section_id: onboarding
  -
    id: m6c58oxe
    lead_title: Onboarding
    title: Onboarding
    image: monitor.png
    reversible: false
    type: panels
    enabled: true
    content:
      -
        type: orderedList
        attrs:
          start: 1
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect Sentinel Core to wired Ethernet'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Press the power button to turn it on'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Browse to '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'http://homeassistant.local:8123/'
                          rel: null
                          target: _blank
                          title: null
                    text: 'http://homeassistant.local:8123/'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Start a new installation by creating an user account, or restore from a backup'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Enter the location of your home on the map'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Select which information you want to share with Nabu Casa'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Check automatically discovered devices and continue to your dashboard'
  -
    id: m6axhp2y
    title: 'Choosing your assistant'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Sentinel Core comes preloaded with GPU drivers and Home Assistant, but you are completely free to choose your Voice Assistant setup.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'A complete Voice Assistant setup consists of several key parts:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'LLM runner: Llama.cpp'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speech to text system: Whisper'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Text to speech system: Piper'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'LLM integration: Extended OpenAI conversation'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speech integration: Wyoming'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Voice Assistant configuration'
      -
        type: paragraph
      -
        type: paragraph
        content:
          -
            type: text
            text: 'And optionally:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Wake word detection: OpenWakeWord'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speakers and microphones throughout your house: Wyoming'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Local microphone: Assist Microphone'
    type: long_content
    enabled: true
    lead_title: 'AI Voice Assistant Setup'
    section_id: voice-assistant
  -
    id: m6c5dile
    lead_title: Add-ons
    title: Add-ons
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Start by going to settings -> Add-ons -> Add-on store.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'From Official add-ons install Piper and Samba share. Optionally also install openWakeWord and Assist Microphone.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Sentinel Core additionally comes preconfigured withe the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/sanctuary-systems-com/llm-addons'
                  rel: null
                  target: _blank
                  title: null
            text: 'Home Assistant LLM add-on repository'
          -
            type: text
            text: ', from which we will install Ramalama and Ramalama Whisper for GPU accelerated Llama.cpp and Whisper.cpp. Additionally, install Sanctuary Updater to receive OS updates from our GPU-enabled fork of Home Assistant.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'For most of these the default options are fine, but in particular you will want to set a Samba password and experiment with choosing different LLM models in the Ramalama configuration.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'For all these add-ons, make sure that "Start on boot" and "Watchdog" are enabled.'
    image: addon.png
    reversible: true
    type: panels
    enabled: true
  -
    id: m6c5dych
    lead_title: Integrations
    title: Integrations
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: "There currently isn't an official Llama.cpp integration, so we will use "
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/jekalmin/extended_openai_conversation'
                  rel: null
                  target: _blank
                  title: null
            text: 'Extended OpenAI Conversation'
          -
            type: text
            text: '. To install that, download the ZIP file from the above link and extract it, connect to the Samba share and open the "config" folder. Drag the custom_components folder from the ZIP to the Samba share config folder. Now restart Home Assistant in Settings -> System and select "Restart Home Assistant" or "Reboot system" from the power menu in the top right.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Now head over to Settings -> Devices & Services.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'All the installed voice add-ons should be auto-detected by Wyoming. If not, manually add Wyoming and click on "add service", then enter "localhost" and the port from the settings of each voice add-on.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Now click "Add Integration" and search for Extended OpenAI Conversation and add it. For the Base URL enter "http://localhost:10202" where 10202 is the port configured in the Ramalama addon. For the API key enter anything you want, and then proceed.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You will probably want to tweak the prompt and make sure to enable "Control Home Assistant".'
    image: integrations.png
    reversible: true
    type: panels
    enabled: true
  -
    id: m6c5eoac
    lead_title: 'Voice Assistant'
    title: 'Voice Assistant'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'This is where it all comes together. In Settings -> Voice Assistants select the existing "Home Assistant" and configure the following items:'
      -
        type: bulletList
        content:
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Conversation Agent: the configuration added in Extended OpenAI Converation'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Speech-to-text: whisper.cpp'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Text-to-speech: piper'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Then head over to the "Expose" app and select the entities you want you AI to be able to see and control.'
      -
        type: paragraph
        content:
          -
            type: text
            text: "That's it! You can now chat with you AI from the assist menu in the top right of the dashboard. For using your microphone it is best to use the mobile app."
      -
        type: paragraph
        content:
          -
            type: text
            text: 'From here you can explore different models, different voices, and pair microphones like the '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://www.home-assistant.io/voice-pe/'
                  rel: null
                  target: _blank
                  title: null
            text: 'Home Assistant Voice'
          -
            type: text
            text: ', '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://futureproofhomes.net/products/satellite1-pcb-dev-kit'
                  rel: null
                  target: _blank
                  title: null
            text: 'FutureProofHomes Satelite1'
          -
            type: text
            text: ', or '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/rhasspy/wyoming-satellite'
                  rel: null
                  target: _blank
                  title: null
            text: 'Wyoming Satelite'
          -
            type: text
            text: .
    image: ai.png
    reversible: true
    type: panels
    enabled: true
seo_noindex: false
seo_nofollow: false
seo_canonical_type: entry
sitemap_change_frequency: weekly
sitemap_priority: 0.5
updated_by: cdeed34e-ed72-49e8-9645-bf272a80a401
updated_at: 1737987419
---
