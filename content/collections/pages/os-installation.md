---
id: 5c526dbf-9dd7-4c52-98d8-54e00ebddfb6
blueprint: page
title: 'OS installation'
updated_by: cff888d4-2e6d-4cab-8708-b98e43893a12
updated_at: 1743584614
seo_noindex: false
seo_nofollow: false
seo_canonical_type: entry
sitemap_change_frequency: weekly
sitemap_priority: 0.5
page_builder:
  -
    id: m629hn9n
    lead_title: 'OS support'
    title: 'How to reinstall the Operating System'
    type: hero
    enabled: true
    button_text: Dowload
    description: |-
      Download our GPU-enabled Home Assistant fork:
      <a href="http://pkg.sanctuary-systems.com/hassos/haos_rpi5-64-15.2.img.xz" target="_blank" class="btn-ghost">Dowload HAOS v15.2</a>
  -
    id: m6b4exx1
    article:
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'What you’ll need'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To flash the Compute Module eMMC, you need the following:'
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
                    text: 'Another computer, referred to in this guide as the '
                  -
                    type: text
                    marks:
                      -
                        type: bold
                    text: 'host device'
                  -
                    type: text
                    text: '. You can use:'
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
                            text: ' Linux (we recommend Raspberry Pi OS or Ubuntu), '
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'Windows 11, '
                  -
                    type: listItem
                    content:
                      -
                        type: paragraph
                        content:
                          -
                            type: text
                            text: 'or macOS.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'The Sentinel Core'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'a USB-C cable'
      -
        type: horizontalRule
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: 'Tip: '
          -
            type: text
            text: 'In some cases, USB hubs can prevent the host device from recognising the Compute Module. If your host device does not recognise the Compute Module, try connecting the Compute Module directly to the host device. For more diagnostic tips, see '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://github.com/raspberrypi/usbboot?tab=readme-ov-file#troubleshooting'
                  rel: null
                  target: _blank
                  title: null
            text: 'the usbboot troubleshooting guide'
          -
            type: text
            text: .
    type: article
    enabled: true
  -
    id: m6b5knx9
    lead_title: 'Step 1'
    title: 'Set up the Sentinel Core'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To begin, physically set up your Sentinel Core.'
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
                    text: 'Disconnect the Sentinel Core from any cables, including the 24-pin ATX connector.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Fit a jumper on header J2 on pins nRPI_BOOT (disable eMMC Boot)'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Connect a cable from USB-C slave port J11 on the Sentinel Core to the host device.'
    image: connect-sentinel-to-host.png
    type: panels
    enabled: true
    reversible: true
  -
    id: m6b6g3mo
    lead_title: 'Step 2'
    title: 'Set up the host device'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Next, let’s set up software on the host device.'
      -
        type: paragraph
      -
        type: paragraph
        content:
          -
            type: text
            text: 'To set up software on a Linux host device:'
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
                    text: 'Run the following command to install rpiboot (or, alternatively, '
                  -
                    type: text
                    marks:
                      -
                        type: link
                        attrs:
                          href: 'https://github.com/raspberrypi/usbboot'
                          rel: null
                          target: _blank
                          title: null
                    text: 'build rpiboot from source'
                  -
                    type: text
                    text: '):'
              -
                type: codeBlock
                attrs:
                  language: null
                content:
                  -
                    type: text
                    text: '$ sudo apt install rpiboot'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Make sure the USB-C cable is connected.'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Then, run rpiboot:'
              -
                type: codeBlock
                attrs:
                  language: null
                content:
                  -
                    type: text
                    text: '$ sudo rpiboot'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'After a few seconds, the Compute Module should appear as a mass storage device. Check the /dev/ directory, likely /dev/sda or /dev/sdb, for the device. Alternatively, run lsblk and search for a device with a storage capacity that matches the capacity of your Compute Module.'
    image: host-device.png
    type: panels
    enabled: true
    note: 'Tip For a host device, we recommend a Raspberry Pi 4 or newer running 64-bit Raspberry Pi OS.'
    reversible: true
  -
    id: m6b6y2zw
    lead_title: 'Step 3'
    title: 'Flash the eMMC'
    content:
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'http://pkg.sanctuary-systems.com/hassos/'
                  rel: null
                  target: _blank
                  title: null
            text: Download
          -
            type: text
            text: ' our newest GPU-enabled Home Assistant fork img.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Use dd to write the raw OS image to your Compute Module. Run the following command, replacing /dev/sdX with the path to the mass storage device representation of your Compute Module and raw_os_image.img with the path to your raw OS image:'
      -
        type: codeBlock
        attrs:
          language: null
        content:
          -
            type: text
            text: '$ sudo dd if=raw_os_image.img of=/dev/sdX bs=4MiB'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Alternatively you can use '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager'
                  rel: null
                  target: _blank
                  title: null
            text: 'Raspberry Pi Imager'
          -
            type: text
            text: ' to flash a generic operating system image to a Compute Module.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Once the image has been written, disconnect and reconnect the Compute Module. You should now see two partitions (for Raspberry Pi OS):'
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
                    text: '/dev/sdX <- Device /dev/sdX1 <- First partition'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: '(FAT) /dev/sdX2 <- Second partition (Linux filesystem)'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'You can mount the /dev/sdX1 and /dev/sdX2 partitions normally.'
    image: host-device.png
    type: panels
    enabled: true
    reversible: true
  -
    id: m6b6zexe
    lead_title: 'Step 4'
    title: 'Boot from eMMC'
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
                    text: 'Turn off the Sentinel Core and disconnect the USB-C cable'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Disconnect nRPI_BOOT from J2 (disable eMMC Boot) on the Sentinel Core'
          -
            type: listItem
            content:
              -
                type: paragraph
                content:
                  -
                    type: text
                    text: 'Reconnect the 24-pin ATX connector and reconnect your GPU and any other peripherals.'
    image: connect-sentinel-to-host.png
    type: panels
    enabled: true
    reversible: true
---
