import sys

def caesarEncrypt(text,s):
   alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   result = ""
   text = text.lower()
   # transverse the plain text
   for i in range(len(text)):
      char = text[i]
      # Encrypt uppercase characters in plain text
      if char == ' ':
          result+=char
      elif (char not in alphabet):
         result += char
      # Encrypt lowercase characters in plain text
      else:
         result += chr((ord(char) + s - 97) % 26 + 97)
   return result

if __name__ =='__main__' :
    caesarEncrypt = caesarEncrypt(sys.argv[1],int(sys.argv[2]))
    print(caesarEncrypt)
