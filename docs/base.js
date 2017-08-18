var msg = Msg(
{

});

var msg2 = Msg(
{
    id: "foo",
    class: "bar",
    inner_x_class:"red !big",
    enable_titlebar: true
});

var msg3 = Msg(
{
    id: "boom",
    enable_inner_x:false,
    enable_outer_x:true
});

var msg4 = Msg(
{
    id: "boop"
});

var msg5 = Msg(
{
    id: "poop",
    lock: false
});

var msg6 = Msg(
{
    temp_disable_close: true,
    autoclose: true,
    enable_progressbar: true
});

var msg7 = Msg(
{
    class: 'no-padding',
    inner_x_class:'dark'
});

var msg_autoclose = Msg(
{
    class:"red",
    autoclose:true,
    enable_inner_x:false,
    close_on_overlay_click:false,
    enable_titlebar:true,
    enable_progressbar:true
});

var msg_ox = Msg(
{
    enable_inner_x:false,
    enable_outer_x:true,
    close_on_overlay_click:false
});

var msg_delay = Msg(
{
    temp_disable_close:true,
    temp_disable_close_delay:5000,
    after_show: function(instance)
    {
        setTimeout(function()
        {
            instance.set("This had a 5 second delay before you could close it. Made to avoid closing the window by accident by misclicking. Default for this option is 1 second.");
        }, 4500);
    }
});

var msg_tst = Msg(
{
    temp_disable_close: true,
    temp_disable_click:true,
    before_toggle:function(instance)
    {
        console.log(instance.window.style.display);
    },
    after_toggle:function(instance)
    {
        console.log(instance.window.style.display);
    }
});

var msg_dclick = Msg(
{
    temp_disable_click:true,
    temp_disable_click_delay:3000
});

var msg_edit = Msg(
{
    clear_editables:true
});

var msg_dkeys = Msg(
{
    temp_disable_keys:true,
    temp_disable_keys_delay:3000
});

var msg_cust = Msg(
{
    class:"blue",
    overlay_class:"green",
    inner_x_class:"red",
    enable_titlebar:true,
    window_width:"500px"
});

var msg_default = Msg(
{
    class:"default",
    enable_outer_x:true
});

var msg_red = Msg(
{
    class:"red",
    enable_outer_x:true,
    autoclose:true,
    autoclose_delay:5000,
    enable_progressbar:true
});

var msg_blue = Msg(
{
    class:"blue",
    enable_outer_x:true,
    autoclose:true,
    autoclose_delay:5000,
    enable_progressbar:true
});

var msg_green = Msg(
{
    class:"green",
    enable_outer_x:true,
    autoclose:true,
    autoclose_delay:5000,
    enable_progressbar:true
});

var msg_black = Msg(
{
    class:"black",
    enable_outer_x:true,
    autoclose:true,
    autoclose_delay:5000,
    enable_progressbar:true
});

var msg_red_tb = Msg(
{
    class:"red",
    enable_outer_x:true,
    enable_titlebar:true
});

var msg_blue_tb = Msg(
{
    class:"blue",
    enable_outer_x:true,
    enable_titlebar:true
});

var msg_green_tb = Msg(
{
    class:"green",
    enable_outer_x:true,
    enable_titlebar:true
});

var msg_black_tb = Msg(
{
    class:"black",
    enable_outer_x:true,
    enable_titlebar:true
});

function play_audio(id)
{
    if(audio_fadeout_interval !== undefined)
    {
        clearInterval(audio_fadeout_interval);
    }

    var audio = document.getElementById(id);

    audio.pause();
    audio.volume = 1;
    audio.currentTime = 0;
    audio.play();
}

function stop_audio(id)
{
    var audio = document.getElementById(id);
}

var audio_fadeout_interval;

function stop_audio(id)
{
    var audio = document.getElementById(id);

    if(audio_fadeout_interval !== undefined)
    {
        clearInterval(audio_fadeout_interval);
    }
    
    audio_fadeout_interval = setInterval(function()
    {
        audio_fadeout(audio);
    }, 100);
}

function audio_fadeout(audio) 
{
    var newVolume = audio.volume - 0.04;

    if(newVolume >= 0)
    {
        audio.volume = newVolume;
    }

    else
    {
        if(audio_fadeout_interval !== undefined)
        {
            clearInterval(audio_fadeout_interval);
        }

        audio.volume = 0;
        audio.pause();
        audio.currentTIme = 0;
    }

}

var msg_toy = Msg(
{
    id:"toy",
    persistent:false,
    window_min_width:"100vw",
    window_min_height:"100vh",
    show_effect:"none",
    close_effect:"none",
    window_cursor:"none",
    enable_overlay:false,
    before_show: function(instance)
    {
        if(screenfull.enabled)
        {
            screenfull.request(instance.window);
        }   
    },
    after_show: function(instance)
    {
        run_symmetric_harmony();
        
        play_audio('toymusic');

        setTimeout(function()
        {
            var spinner = document.getElementById('spinner');
            spinner.style.display = "none";

            var canv = document.getElementById('canv');
            canv.style.display = "block";
        },2000);
    },
    after_close: function(instance)
    {
        clearInterval(sym_interval);
        stop_audio('toymusic');
    }
});

var msg_np = Msg(
{
    persistent:false,
    before_close:function(instance)
    {
        console.log(instance.window);
    },
    after_close:function(instance)
    {
        console.log(instance.window);
    }
});

var msg_nf = Msg(
{
    show_effect:"none",
    close_effect:"none"
});

var msg_nfi = Msg(
{
    show_effect:"none",
    close_effect:"fade",
    close_effect_duration:3000
});

var msg_nfo = Msg(
{
    show_effect:"fade",
    close_effect:"none",
    show_effect_duration:3000
});

var msg_lf = Msg(
{
    show_effect_duration:1000,
    close_effect_duration:1000
});

var msg_ptop = Msg(
{
    position:"top"
});

var msg_pbottom = Msg(
{
    position:"bottom"
});

var msg_pleft = Msg(
{
    position:"left"
});

var msg_pright = Msg(
{
    position:"right"
});

var msg_ptright = Msg(
{
    position:"topright"
});

var msg_ptleft = Msg(
{
    position:"topleft"
});

var msg_pbright = Msg(
{
    position:"bottomright"
});

var msg_pbleft = Msg(
{
    position:"bottomleft"
});

var sm = "This is a simple message.";

var sc = "There are options to give elements different ids and classes. Then it's a matter of customizing and reusing parts however you want. By default, the titlebar is not enabled, I enabled it here to show that it's possible to have a titlebar."

var s = '<div class="heading">Where does it come from?</div><br>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';

s += "<br><br><br><div class='heading'>Why do we use it?</div><br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

s += "<br><br><br><div class='heading'>Where can I get some?</div><br>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

var s2 = "<div class='heading'>Bubbagum</div><br><img src='bubbagum.jpg'>";

var s3 = "<div class='btn' onclick='msg4.show(\"This window is on top.\")'>Open Another Window</div>";

var s4 = "This window will autoclose.";

var s5 = "Click the x in the top right corner of the overlay to close this. The position of the x buttons can be configured to be either on the left or right side.";

var s6 = "Try to close the window.";

var s7 = "<div class='btn' onclick=\"alert(\'This deactivated click events inside the window for 3 seconds. Made to avoid clicking things by accident. Default for this option is 1 second.\')\">Keep Clicking Me</div>";

var s8 = "When you focus the textarea and press Escape it will clear it. Press Escape again and it closes the window. It also works on inputs type=text.<br><br><textarea id='texta' rows=5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</textarea><br><br>";

var s9 = "Keep Pressing Enter";

var s10 = "This is a customized window.\nInformation about how to style a window can be found below.";

var stoy = `<div class='heading'>Symmetric Harmony</div>By Tiffany Rayside<br><br><div><canvas id="canv"></canvas></div><img id='spinner' src='spinner.gif'>`;

document.addEventListener("keyup", function(e)
{
    if(msg_dkeys.is_open())
    {
        if(e.keyCode === 13)
        {
            console.log('Enter pressed.');
            alert("This deactivated key actions on the document for 3 seconds. Made to avoid typing/activating things by accident. Default for this option is 1 second.")
        }
    }
});

var msg_pop = Msg(
{
    class:"green",
    autoclose:true,
    enable_progressbar:true,
    enable_overlay:false,
    position:"bottomright",
    lock:false
});

var pops = [];

var colors = ["green", "blue", "red", "black"];

var current_color = 0;

function pop(position)
{
    var color = colors[current_color];

    current_color += 1;

    if(current_color === colors.length)
    {
        current_color = 0;
    }

    if(color === "green")
    {
        var message = "Click me to know about my options.";
        var title = "Success";
    }

    else if(color === "blue")
    {
        var message = "Click me to know about my options.";
        var title = "Reminder";        
    }

    else if(color === "red")
    {
        var message = "Click me to know about my options.";
        var title = "Warning";        
    }

    else if(color === "black")
    {
        var message = "Click me to know about my options.";
        var title = "Tip";        
    }

    var sideStack = document.getElementById('select_sideStack').value;
    var autoclose = document.getElementById('input_autoclose').checked;
    var sideStack_collapse = document.getElementById('input_sideStack_collapse').checked;
    var enable_titlebar = document.getElementById('input_enable_titlebar').checked;

    var show_effect = document.getElementById('select_show_effect').value;
    var close_effect = document.getElementById('select_close_effect').value;

    if(autoclose)
    {
        var enable_progressbar = true;
    }

    else
    {
        var enable_progressbar = false;
    }

    pupmsg = Msg(
    {
        class: color,
        enable_overlay: false,
        position: position,
        autoclose: autoclose,
        autoclose_delay: 5000,
        enable_progressbar: enable_progressbar,
        persistent: false,
        sideStack: sideStack,
        sideStack_collapse:sideStack_collapse,
        enable_titlebar:enable_titlebar,
        edge_padding:document.getElementById('input_edge_padding').value,
        sideStack_padding:document.getElementById('input_sideStack_padding').value,
        zStack_level: 1,
        window_cursor:"pointer",
        window_unselectable:true,
        show_effect:show_effect,
        close_effect:close_effect,
        lock: false,
        on_click: function(instance)
        {
            show_options(instance);
        }
    });

    pops.push(msg);

    pupmsg.show([title, message]);
}

function show_options(popup)
{
    var msg = Msg({class:popup.options.class});

    var s = '';

    var keys = Object.keys(popup.options);

    for(key of keys)
    {
        s += key + ": ";
        s += popup.options[key] + "<br><br>";
    }

    msg.show(s);
}

function pop2()
{
    var msg = Msg(
    {
        preset:"popup_autoclose",
        class:"red",
        sideStack_collapse:false
    });

    msg.show(`Task completed succesfully.`);
}

function get_random_int(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var msg_wo = Msg(
{
    while_open:function(instance)
    {
        instance.set(instance.html() + '!');
        if(instance.html().indexOf('!!!!') !== -1)
        {
            instance.close();
        }
    }
});

var msg_snack = Msg({
    preset:"snackbar",
    id:"snackbar"
});

var scks = [];

var sck = "";

sck += "<span class='snack_msg'>New message arrived</span>";
sck += "<span class='snack_btn' onclick='open_snack_message()'>open</span>";

var sck2 = "";

sck2 += "<span class='snack_msg'>An update is required</span>";
sck2 += "<span class='snack_btn2' onclick='update()'>Update</span>";

scks.push(sck);
scks.push(sck2);

var current_sck = 0;

function snack()
{
    msg_snack.show(scks[current_sck]);

    current_sck += 1;

    if(current_sck === scks.length)
    {
        current_sck = 0;
    }
}

function open_snack_message()
{
    msg_snack.close();

    var s = "I updated the database.\n\n - Tim";
    
    msg_green_tb.show(['Message', s]);
}

var msg_update = Msg(
{
    class:"blue",
    autoclose:true,
    enable_progressbar:true,
    reverse_autoclose_progressbar:true,
    enable_inner_x: false,
    close_on_overlay_click:false,
    close_on_escape:false,
    after_set_progress:function(instance)
    {
        update_progress.innerHTML = instance.get_progress() + "%";
    }
});

function update()
{
    msg_snack.close();

    msg_update.show("We're applying an update. Do not turn off the computer.<br><br><div id='update_progress'></div>");
    update_progress = document.getElementById('update_progress');
}

var msg_psnack = Msg(
{
    preset:"snackbar"
});

function pop_test(position, sleep=0)
{
    function pap()
    {
        pop(position)
    }
    
    if(sleep > 0)
    {
        var n = 0;

        pap();

        var papinterval = setInterval(function()
        {
            pap();

            n += 1;

            if(n > 2)
            {
                clearInterval(papinterval)
            }
        }, sleep)
    }

    else
    {
        pap();pap();pap();pap();
    }
}