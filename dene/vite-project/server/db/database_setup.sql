CREATE DATABASE UcakRezervasyon;

USE UcakRezervasyon;


CREATE TABLE Iller (
    Id INT PRIMARY KEY IDENTITY(1,1),
    SehirAdi NVARCHAR(50) NOT NULL
);


CREATE TABLE HavayoluFirmalari (
    Id INT PRIMARY KEY IDENTITY(1,1),
    FirmaAdi NVARCHAR(50) NOT NULL
);


CREATE TABLE UcakSeferleri (
    Id INT PRIMARY KEY IDENTITY(1,1),
    HavayoluId INT NOT NULL,
    NeredenId INT NOT NULL,
    NereyeId INT NOT NULL,
    KalkisSaati DATETIME NOT NULL,
    VarisSaati DATETIME NOT NULL,
    FOREIGN KEY (HavayoluId) REFERENCES HavayoluFirmalari(Id),
    FOREIGN KEY (NeredenId) REFERENCES Iller(Id),
    FOREIGN KEY (NereyeId) REFERENCES Iller(Id)
);



INSERT INTO Iller (SehirAdi) VALUES 
('İstanbul'), ('Ankara'), ('İzmir'), ('Antalya');


INSERT INTO HavayoluFirmalari (FirmaAdi) VALUES
('THY'), ('Pegasus'), ('AnadoluJet');


INSERT INTO UcakSeferleri (HavayoluId, NeredenId, NereyeId, KalkisSaati, VarisSaati) VALUES
(1, 1, 2, '2025-01-15 08:00:00', '2025-01-15 09:30:00'),
(2, 2, 3, '2025-01-15 10:00:00', '2025-01-15 11:30:00'),
(3, 3, 4, '2025-01-16 12:00:00', '2025-01-16 13:30:00');
