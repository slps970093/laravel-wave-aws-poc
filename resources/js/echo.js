import Echo from 'laravel-echo';

import {Wave, WaveConnector} from 'laravel-wave';

const wave = new Wave({
    debug: true,
})
window.Echo = new Echo({
    broadcaster: wave,
});
