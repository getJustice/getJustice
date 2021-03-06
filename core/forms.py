from django import forms


class ReportForm(forms.Form):
    subject = forms.CharField()
    send_to = forms.CharField(max_length=500)

    message = forms.CharField(label="message", max_length=5000)
    screenshot = forms.CharField(widget=forms.HiddenInput(), required=False)
    image = forms.FileField(label='image', required=False)


class WebsiteReportForm(forms.Form):
    subject = forms.CharField()
    send_to = forms.CharField(max_length=500)

    message = forms.CharField(label="message", max_length=5000)
    image = forms.FileField(label='image', required=False)
