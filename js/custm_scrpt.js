var pathname = window.location.protocol + "//" + location.host + "/";

/*message box*/
function messagebox($status, $msg, $time) {
    if ($status == "success") {
        $(".bx-msg-data").html("<div class='bx-act-success'><span class='msg42_i'>" + $msg + "</span><span class='msg_b56'>DONE</span></div>").css('display', 'block').addClass("actv").promise().done(function() {
            $(".mdi,svg").css({ "visibility": "visible" });
        })

    }
    if ($status == "report_success") {
        $(".bx-msg-data").html("<div class='bx-act-success'><span class='msg42_i'>" + $msg + "</span><span class='msg_b56'>DONE</span></div>").css('display', 'block').addClass("actv").promise().done(function() {
            $(".mdi,svg").css({ "visibility": "visible" });
        })

    }

    if ($status == "success_forget") {
        $(".bx-msg-data").html("<div class='bx-act-success'><span class='msg42_i'>" + $msg + "</span><span class='msg_b56'>ERROR</span></div>").css('display', 'block').addClass("actv").promise().done(function() {
            $(".mdi,svg").css({ "visibility": "visible" });
        })

    }
    if ($status == "error") {
        $(".bx-msg-data").html("<div class='bx-act-error'><span class='msg42_i'>" + $msg + "</span><span class='msg_b56'>ERROR</span></div>").css('display', 'block').addClass("actv").promise().done(function() {
            $(".mdi,svg").css({ "visibility": "visible" });
        })
    }
    if ($status == "error_resp") {
        $(".bx-msg-data").html("<div class='bx-act-error'><span class='msg42_i'>" + $msg + "</span><span class='msg_b56'>ERROR</span></div>").css('display', 'block').addClass("actv").promise().done(function() {
            $(".mdi,svg").css({ "visibility": "visible" });
        })
    }

    if ($status == "success_usr") {
        $(".bx-msg-data").html("<div class='bx-act-success'><span class='msg42_i'>" + $msg + "</span><span class='msg_b56'>DONE</span></div>").css('display', 'block').addClass("actv").promise().done(function() {
            $(".mdi,svg").css({ "visibility": "visible" });
        })
    }
    if ($time !== null) {
        setTimeout(function() {
            $(".bx-msg-data").removeClass("actv").promise().done(function() {
                //  $(this).html('');
            });
        }, parseInt($time));
    }
}


$(document).on("click", ".subm_dt_frm", function() {
    var $this_id = $(this);
    $this_html = $this_id.html();
     $this_id.html("loading..").prop("disabled", true);
    var $data_ref = new FormData($("#cnt_frm_dt")[0]); 
    $data_ref.append("type", "contact_form");
    subm_contact_dt($data_ref, $this_id);
});
$(document).on("click", ".subm_dt_enq", function() {
    var $this_id = $(this);
    $this_html = $this_id.html();
     $this_id.html("loading..").prop("disabled", true);
    var $data_ref = new FormData($("#frm_dt_b74")[0]); 
    $data_ref.append("type", "index_enquiry");
    subm_contact_dt($data_ref, $this_id);
}); 
$(document).on("click", "._tp_frm_subm", function() {
    var $this_id = $(this);
    $this_html = $this_id.html();
     $this_id.html("loading..").prop("disabled", true);
    var $data_ref = new FormData($("#tp_hdr_enqfrm")[0]); 
    $data_ref.append("type", "top_header_enquiry");
    subm_contact_dt($data_ref, $this_id);
}); 
$(document).on("click", ".subm_enq_sndr", function() {
    var $this_id = $(this);
    $this_html = $this_id.html();
     $this_id.html("loading..").prop("disabled", true);
    var $data_ref = new FormData($("#main-comments-form")[0]); 
    $data_ref.append("type", "sandra_enquiry");
    subm_contact_dt($data_ref, $this_id);
}); 
subm_contact_dt = ($data_ref, $this_id)=> 
{
    $data_ref.append("action", "_form_actbtn_data");
    $.ajax({
        url: pathname + "aj_funct.php",
        type: "POST",
        data: $data_ref,
        cache: true,
        processData: false,
        contentType: false,
       dataType: 'json',
        success: function(result, status) {
 
             if (status == "success") {
                if (result.status == "success") {
                    messagebox(result.status, result.msg, 3000);
                    setTimeout(function() {
                    $this_id.html($this_html).prop("disabled", false);
                        window.location.reload(); 
                    }, 3000);
                }
                if (result.status == "error") {
                    $this_id.html($this_html).prop("disabled", false);
                    messagebox(result.status, result.msg, 3000);
                }
                if (result.status == "error_resp") {
                    $this_id.html($this_html).prop("disabled", false);
                    messagebox(result.status, result.msg, 3000);
                }

            }

        }

    });
}
$(document).ready(function(){ 
    if(window.location.hash) {
        var elem = window.location.hash;
        $('html,body').animate({
             scrollTop: $(elem).offset().top-100
           }, 10);
           return false;
   }
})