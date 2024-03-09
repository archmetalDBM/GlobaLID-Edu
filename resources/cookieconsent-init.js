// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'This website contains third-party content that uses cookies, such as Youtube videos. Some of the cookies are necessary to ensure that these elements work properly, others are used for analytics and tracking you. the latter will only be set with your consent. Your interaction and IP address is sent to the servers of the analytics providers in this case. <br> <a href="/about.html#privacy">Read the Privacy Policy</a>', // <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>
                primary_btn: {
                    text: 'Accept necessary',
                    role: 'accept_necessary'  // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: 'This site contains third-party content that uses cookies, such as Youtube videos. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/about.html#privacy" class="cc-link">privacy policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of the third-party content on this website. Without these cookies, these parts of the website would not work properly.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow providers of third-party content to remember the choices you have made in the past.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
//                         cookie_table: [             // list of all expected cookies
//                            {
//                                col1: '^_ga',       // match all cookies starting with "_ga"
//                                col2: 'google.com',
//                                col3: '2 years',
//                                col4: 'description ...',
//                                is_regex: true
//                            },
//                            {
//                                col1: '_gid',
//                                col2: 'google.com',
//                                col3: '1 day',
//                                col4: 'description ...',
//                            }
//                        ]
                    }, {
                        title: 'Advertisement and Targeting cookies',
                        description: 'These cookies allow providers of third-party content to remember how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="about.html#privacy">contact us</a>.',
                    }
                ]
            }
        }
    }
});
