let spaceships = []

function addSpaceship(name: string, pilot: string, crewLimit: number) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    return spaceship
}

function addMemberToCrew(spaceship: { name: string, crewLimit: number, crew: string[] }, member: string) {
    if (spaceship.crew.length < spaceship.crewLimit) {
        spaceship.crew.push(member)
        alert(`Membro ${member} adicionado à tripulação da nave ${spaceship.name}`)
    } else {
        alert(`Não é possível adicionar mais membros à tripulação da nave ${spaceship.name}. Limite atingido.`)
    }
}

function sendSpaceshipToMission(spaceship: { name: string, crew: string[], inMission: boolean }) {
    if (spaceship.inMission === true) {
        alert(`A nave ${spaceship.name} já está em uma missão.`)
    }

    const minCrewForMission = Math.floor(spaceship.crew.length / 3)
    if (minCrewForMission > 0) {
        spaceship.inMission = true
        alert(`A nave ${spaceship.name} foi enviada em missão.`)
    } else {
        alert(`Não é possível enviar a nave ${spaceship.name} para a missão. Limite abaixo do esperado.`)
    }
}

function listAllSpaceships(spaceships: { name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean }[]) {
    spaceships.forEach(spaceship => {
        alert(`Nave: ${spaceship.name}, 
        Piloto: ${spaceship.pilot},
        Limite da Nave: ${spaceship.crewLimit},
        Tripulação: ${spaceship.crew.length}, 
        Em missão: ${spaceship.inMission}`)
    })
}

function fistMenuOption() {
    const spaceshipName = prompt('Insira o nome da nave:')
    const spaceshipPilot = prompt('Insira o nome do piloto da nave:')
    const spaceshipCrewLimit = Number(prompt('Insira o limite da população da nave:'))
    const newSpaceship = addSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit)
    spaceships.push(newSpaceship)
    alert(`Nave ${spaceshipName} criada com sucesso!`)
}

function secondMenuOption() {
    const spaceshipIndex = prompt('Selecione a nave (índice) para adicionar um membro:')
    const chosenSpaceship = spaceships[spaceshipIndex]
    if (chosenSpaceship) {
        const memberName = prompt('Insira o nome do membro:')
        addMemberToCrew(chosenSpaceship, memberName)
    } else {
        alert('Nave não encontrada. Operação cancelada')
    }
}

function thirdMenuOption() {
    const missionSpaceshipIndex = prompt('Selecione a nave (índice) para enviar em missão:')
    const missionSpaceship = spaceships[missionSpaceshipIndex]
    if (missionSpaceship) {
        sendSpaceshipToMission(missionSpaceship)
    } else {
        alert('Nave não encontrada. Operação cancelada')
    }
}

function fourthMenuOption() {
    if (spaceships.length > 0) {
        alert('Listagem de naves:')

        spaceships.forEach((spaceship, index) => {
            alert(`
            Índice ${index}, 
            Nome: ${spaceship.name}, 
            Piloto: ${spaceship.pilot}
            Limite da Nave: ${spaceship.crewLimit},
            Tripulação: ${spaceship.crew.length}, 
            Em missão: ${spaceship.inMission}`
            )
        })
    } else {
        alert('Nenhuma nave cadastrada.')
    }
}

let option = ''

do {
    option = prompt(`Selecione uma das opções a seguir:
    1. Adicionar uma nova nave.
    2. Adicionar um membro à tripulação de uma nave.
    3. Enviar uma nave à uma missão.
    4. Listar todas as naves cadastradas.
    5. Sair`)

    switch (option) {
        case "1":
            fistMenuOption()
            break
        case "2":
            secondMenuOption()
            break
        case "3":
            thirdMenuOption()
            break
        case "4":
            fourthMenuOption()
            break
        case "5":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }

} while (option !== "5");