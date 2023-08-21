-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sneakerhouse
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sneakerhouse
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sneakerhouse` DEFAULT CHARACTER SET utf8 ;
USE `sneakerhouse` ;

-- -----------------------------------------------------
-- Table `sneakerhouse`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sneakerhouse`.`Cliente` (
  `CPF` INT NOT NULL,
  `Nome` VARCHAR(100) NOT NULL,
  `Endereco` VARCHAR(100) NOT NULL,
  `Celular` VARCHAR(15) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`CPF`))
ENGINE = InnoDB;


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
