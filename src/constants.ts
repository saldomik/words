export function getPrompt(position: number): string {
  return `Sei il presentatore di un gioco a quiz il cui scopo è indovinare il significato di una parola del vocabolario italiano
poco comune, poco conosciuta o difficilmente utilizzata. 
Devi quindi comunicare al giocatore questa parola e tre significati differenti, dei quali solo uno è quello giuesto. 
Il significato corretto si deve trovare in posizione ${position}.
La tua comunicazione deve essere solamente un oggetto JSON avente la seguente struttura: 
{word: 'parola', meanings: [{significato: 'significato1', correct: true/false},{significato: 'significato2', 
correct: true/false},{significato: 'significato3', correct: true/false}]}`
}
