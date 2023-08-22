create database sneakerhouse;
use sneakerhouse;

create table Cliente (
cpf int not null,
nome varchar(100) not null,
endereco varchar(150),
celular varchar(15),
senha varchar(20),
email varchar(100) not null,
primary key(cpf) )


-- -----------------------------------------------------
-- Table `sneakerhouse`.`Compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sneakerhouse`.`Compra` (
  `ID` INT NOT NULL,
  `Quantidade` INT NULL,
  `Entrega` INT NOT NULL,
  `Tamanho` VARCHAR(2) NOT NULL,
  `Endereco de entrega` VARCHAR(150) NOT NULL,
  `Data de compra` INT NULL AUTO_INCREMENT,
  `Pagamento` VARCHAR(45) NOT NULL,
  `Cliente_CPF` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Compra_Cliente_idx` (`Cliente_CPF` ASC) VISIBLE,
  CONSTRAINT `fk_Compra_Cliente`
    FOREIGN KEY (`Cliente_CPF`)
    REFERENCES `sneakerhouse`.`Cliente` (`CPF`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sneakerhouse`.`Marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sneakerhouse`.`Marca` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  `Logo` INT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sneakerhouse`.`Tenis`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sneakerhouse`.`Tenis` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(100) NOT NULL,
  `Descricao` TEXT NOT NULL,
  `PrecoUnitario` FLOAT NOT NULL,
  `Unidade` VARCHAR(45) NOT NULL,
  `Marca_ID` INT NOT NULL,
  `Compra_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_Tenis_Marca1_idx` (`Marca_ID` ASC) VISIBLE,
  INDEX `fk_Tenis_Compra1_idx` (`Compra_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Tenis_Marca1`
    FOREIGN KEY (`Marca_ID`)
    REFERENCES `sneakerhouse`.`Marca` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tenis_Compra1`
    FOREIGN KEY (`Compra_ID`)
    REFERENCES `sneakerhouse`.`Compra` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
