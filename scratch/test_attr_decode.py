from html.parser import HTMLParser

class TestParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        for k, v in attrs:
            if k == 'data-en':
                print(f"Attr {k}: {repr(v)}")

parser = TestParser()
parser.feed('<div data-en="Digital &amp; Design"></div>')
