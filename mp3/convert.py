import sys

def convert_to_js_array(input_file, output_file="payload_custom.js"):
    with open(input_file, 'rb') as f, open(output_file, 'w') as out:
        hex_bytes = [f"0x{b:02X}" for b in f.read()]
        lines = [", ".join(hex_bytes[i:i+16]) for i in range(0, len(hex_bytes), 16)]
        
        out.write("const customPayload = [\n    ")
        out.write(",\n    ".join(lines))
        out.write("\n];\n")

if __name__ == "__main__":
    music = sys.argv[1] if len(sys.argv) > 1 else "music.mp3"
    convert_to_js_array(music)
