const base = Process.getModuleByName("libsound.so").base;

const SoundManager_playSoundFromBytes = new NativeFunction(base.add(0x3E318), 'pointer', ['pointer']);
const SoundManager_payloadToSound = new NativeFunction(base.add(0x3DCF8), 'pointer', ['pointer', 'size_t']);

const customPayload = [];

function main() {
    const size = customPayload.length;
    const sound = Memory.alloc(size);
        
    const buffer = new Uint8Array(customPayload).buffer;
    sound.writeByteArray(buffer);

    const handle = SoundManager_payloadToSound(ptr, size);
    const result = SoundManager_playSoundFromBytes(handle);
    return result;
}
main();
