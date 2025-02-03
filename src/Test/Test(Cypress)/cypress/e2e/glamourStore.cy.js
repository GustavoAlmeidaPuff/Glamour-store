describe('Testando a aplicação Glamour Store', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/#contato')
  })

  it('Deve haver um titulo escrito "Glamour Store"', () => {
    cy.visit('http://localhost:3000/#contato')
    cy.contains('h2', 'Glamour Store').should('be.visible')
  })

  it('Teste de Redirecionamento ao Clicar no Ícone do Instagram', () => {
    cy.visit('http://localhost:3000/#contato')
    cy.get('.social-icon').click()

  })

  it.only('Validando itens de menu de navegação', () => {
    cy.visit('http://localhost:3000/#contato')
    cy.get('[href="#inicio"]').click()
    cy.get('[href="#galeria"]').click()
    cy.get('[href="#mapa"]').click()
    cy.get('[href="#contato"]').click()
  })
})