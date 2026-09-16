export function Design() {
  return (
    <div className="row mt-4 mb-5">
      <div className="col-lg-10 mx-auto">
        <article>
          <h2 className="mb-4">Programmable Backbone Module</h2>
          <h3 className="mt-5 mb-3">The SELP scaffold</h3>
          <p>
            Conventional hydrogels acquire their function through the physical
            blending of multiple components, and their properties therefore
            derive from empirically optimized formulations. Such systems suffer
            from substantial batch-to-batch variability and from
            cross-interference between components, and they offer no defined
            position at which a standardized interface could reside. To convert
            material properties into writable sequence parameters, we selected
            silk-elastin-like protein (SELP) as the scaffold of our system. SELP
            is a de novo designed chimeric polypeptide whose design rationale
            follows the synthetic-biology principle of functional decoupling and
            recombination: the silk-like domains assemble into physical
            crosslinking domains through interchain β-sheet stacking, conferring
            mechanical strength and structural stability, whereas the
            elastin-like domains provide elasticity and environmental
            responsiveness, manifested as lower critical solution temperature
            (LCST)-type behaviour in which the chains undergo hydrophobic
            collapse above the transition temperature and redissolve below it.
          </p>
          <p>
            Unlike chemically polymerized macromolecules, SELP is genetically
            encoded and translated within the cell, which has three direct
            consequences. First, every chain produced from a given DNA template
            is of identical length, so the material displays none of the
            molecular weight distribution inherent to synthetic polymers and its
            properties are reproducible between batches. Second, tuning the
            material means editing the sequence itself rather than adjusting
            formulation ratios, which allows an explicit correspondence to be
            established between what was changed and how much the properties
            changed. Third, and most consequential for the present design,
            introducing an additional functional residue or a short peptide tag
            requires only the insertion of the corresponding bases at the chosen
            position in the gene — and that position is ours to specify. The
            interface module rests on this third property: the interface is not
            grafted onto the material surface after the fact, but is written
            into a defined position of the scaffold at the genetic level.
          </p>
          <p>
            Our scaffold is a multimer of a SELP monomer sequence and follows
            the established 2X-m nomenclature, in which 2 denotes the fixed
            silk-to-elastin ratio within each monomer, X denotes the
            characteristic amino acid encoded into the elastin-like domain, and
            m denotes the number of monomer repeats. Each monomer comprises
            (GAGAGS)₂ as the silk block and (GVGVP) repeats as the elastin
            block, into which three classes of functional residue are
            site-specifically encoded. The tyrosine (Y) of (GYGVP) serves as the
            chemical anchor for photo-crosslinking and thus determines the
            covalent crosslinking density and, in turn, the mechanical strength
            of the network. The lysine (K) of (GKGVP) provides positive charge
            that engages in electrostatic interaction with the strongly anionic
            glycosaminoglycans of the cartilage extracellular matrix, enhancing
            tissue adhesion. The RGD motif of (GRGDS) acts as an
            integrin-binding site and mediates the adhesion of chondrocytes and
            bone marrow-derived mesenchymal stem cells (BMSCs). Previous work on
            scaffolds of this type has shown that extending the number of
            monomer repeats concurrently increases the storage and compressive
            moduli and slows degradation; that RGD-bearing variants support
            markedly greater chondrocyte and BMSC adhesion and proliferation
            than RGD-free controls; and that blue-light-triggered visible-light
            crosslinking affords gelation within two seconds together with
            tissue adhesive strength on the order of 90 kPa. On this basis we
            adopt the number and spacing of Y sites, together with the repeat
            number m, as our principal tunable dimensions, and additionally
            pre-install interface sites within the sequence.
          </p>
          <p>
            For gelation we selected visible-light-initiated dityrosine
            crosslinking in preference to thermal gelation or exogenous chemical
            crosslinkers. Cartilage defects are irregular in shape and variable
            in depth, so the material must conform to the lesion in situ; the
            articular cavity is subject to continuous synovial fluid washout, so
            curing must be completed within seconds or the precursor is diluted
            and lost before gelation occurs; visible light is less damaging to
            cells and matrix than ultraviolet irradiation; and, most
            importantly, chemical crosslinkers such as glutaraldehyde modify
            lysine and aspartate side chains indiscriminately and would
            therefore destroy precisely the K residues and the D of the RGD
            motif that we have encoded into the sequence. We accordingly adopt
            the Ru/SPS photoinitiating system: Ru(bpy)₃²⁺ is excited under 450
            nm blue light and transfers an electron to sodium persulfate, being
            itself oxidized to the strongly oxidizing Ru(III); Ru(III) in turn
            oxidizes tyrosine residues within the elastin-like domains to
            tyrosyl radicals, and the coupling of two adjacent radicals yields a
            covalent dityrosine crosslink. At 2/20 mM Ru/SPS under 450 nm
            illumination at 30 mW cm⁻², this system drives the sol–gel
            transition of the SELP precursor solution to completion within two
            seconds.
          </p>
          <p>
            The production route of the scaffold is likewise dictated by the
            sequence. We use E. coli BL21 as the expression host and exploit the
            phase-transition behaviour conferred by the elastin-like domains to
            purify the target protein by inverse transition cycling (ITC): SELP
            undergoes hydrophobic collapse and precipitates above its transition
            temperature and redissolves below it, so that a cycle of heating,
            discarding the supernatant, cooling to redissolve and discarding the
            pellet separates SELP from contaminating proteins that lack this
            behaviour. This design substitutes thermal responsiveness for column
            chromatography, rendering scale-up independent of affinity resins
            and chromatographic equipment and thus amenable to industrial-scale
            production.
          </p>
          <p>
            With respect to degradation, the SELP scaffold degrades naturally in
            vivo at a rate that slows as the number of monomer repeats
            increases; the repeat number m therefore governs mechanical
            properties and degradation rate simultaneously, and can be specified
            according to the rate at which articular cartilage regenerates. The
            rate at which the material disappears must be matched to the rate at
            which new cartilage is deposited, whereas an implant that persists
            indefinitely sustains M1 macrophage activation and precludes
            cartilage regeneration. Degradability is thus not a shortcoming here
            but the very property that allows the material to be progressively
            replaced by newly formed tissue.
          </p>
          <h3 className="mt-5 mb-3">The standardized linker</h3>
          <p>
            If SELP addresses how the scaffold persists and responds to its
            environment, the linker addresses how functional units are attached
            to that scaffold in a controlled, reproducible and scalable manner.
            Our intention is that the bulk of the material remain invariant
            while the appended functional modules are exchanged freely according
            to the task at hand; the interface chemistry must therefore be
            highly specific, covalent and irreversible, operable under mild
            conditions, as small as possible, positionable at will, and capable
            of orthogonal expansion. None of the protein-ligation technologies
            in common use — non-specific chemical conjugation,
            maleimide–cysteine chemistry, Sortase A-mediated ligation, or
            SpyTag–SpyCatcher — can be applied to the post-functionalization of
            a hydrogel material in any strict sense.
          </p>
          <p>
            We therefore designed an improved peptide–peptide ligation system.
            The SELP scaffold carries the 12-residue SnoopTag2, functional
            modules are fused to the 23-residue DogTag2, and an isopeptide bond
            is formed between the two under catalysis by exogenous SnoopLigase2.
            The system derives from the C-terminal domain of the Streptococcus
            pneumoniae adhesin RrgA by three-way splitting: SnoopTag2
            contributes the reactive lysine K742, DogTag2 contributes the
            reactive asparagine N854, and SnoopLigase2 is the 104-residue
            catalytic domain whose glutamate E803 promotes transamidation
            between the two tags, with the loss of one molecule of ammonia and
            the formation of an irreversible isopeptide bond. SnoopLigase is in
            essence an enzyme whose function has been redefined: it no longer
            serves the structural role of the native adhesin, but has been
            engineered into a molecular tool that performs ligation only at
            positions specified in advance by the sequence. All components of
            the system are free of cysteine so as to tolerate oxidizing or
            reducing environments, which renders them intrinsically compatible
            both with the cysteine-free design of SELP and with our
            radical-based gelation chemistry; both tags remain reactive at the
            N- and C-termini of a protein and, when flanked by a flexible
            linker, at internal loop regions.
          </p>
          <p>
            Starting from the first-generation SnoopLigase, we subjected the
            system to directed evolution and rational design, raising its
            reaction rate by more than three orders of magnitude relative to the
            parent. Ligation proceeds to completion in standard PBS (pH 7.4) at
            room temperature on a timescale of minutes, and the system remains
            active between 4 and 45 °C, from pH 4 to 10, and at NaCl
            concentrations up to 1 M. Interface assembly can therefore be
            inserted directly into the main process flow — expression, ITC
            purification, assembly, precursor formulation, injection and
            photo-crosslinking — without requiring a dedicated buffer system of
            its own.
          </p>
          <p>
            One intrinsic limitation remains. Once ligation is complete, the
            product reconstitutes a conformation resembling the native RrgA
            domain and binds the ligase very tightly, so that SnoopLigase2
            behaves as a single-turnover catalyst and remains associated with
            the ligated product. For the material itself, this means that every
            linkage would carry an approximately 12 kDa ligase domain. To remove
            this limitation, we introduced three further substitutions onto the
            known mutational background of SnoopLigase2: A771P and E785P
            stabilize the apo-state fold, while E827Q selectively attenuates the
            product-state interface. The salt bridge between E827 and K734 of
            SnoopTag2 is the key contact that locks the product in place, and
            substituting glutamine for glutamate releases this contact while
            preserving both the apo-state polar network and the catalytic
            geometry, thereby enabling multiple rounds of turnover and
            converting SnoopLigase from a stoichiometric reagent into a genuine
            multi-turnover catalyst.
          </p>
          <p>
            Two insertion topologies were designed for the interface. In the
            first, SnoopTag2 is placed at the N- or C-terminus of SELP; this is
            straightforward to construct, leaves the regularity of the repeat
            region undisturbed, and — because the number of interfaces per chain
            is unitary — allows conjugation efficiency to be quantified
            directly. In the second, SnoopTag2 is inserted between repeat units,
            so that the loading density of functional modules becomes a
            programmable parameter set by the insertion interval, and the
            interfaces are distributed more uniformly throughout the crosslinked
            network. In both topologies a flexible linker, GSGSGS or (GGSGGS)ₙ,
            is retained on either side of the tag to reduce steric hindrance and
            improve the accessibility of the interface to the ligase.
          </p>
          <h3 className="mt-5 mb-3">Orthogonal expansion</h3>
          <p>
            To raise the interface layer from a single connection point to an
            extensible interface standard, we introduced a second, orthogonal
            channel alongside the Snoop system. SpyTag (13 residues, carrying a
            reactive aspartate) and KTag (10 residues, carrying a reactive
            lysine) derive from the CnaB2 domain of the fibronectin-binding
            protein FbaB of Streptococcus pyogenes, and an isopeptide bond is
            formed between them under catalysis by the ~11 kDa SpyLigase through
            its Glu77. The orthogonality of the two systems has a structural
            basis: the Snoop system originates from RrgA and the Spy system from
            CnaB2, with distinct parent proteins and distinct recognition
            sequences. Replacing a subset of the scaffold interfaces with SpyTag
            and fusing selected functional modules to KTag therefore allows two
            classes of functional unit to be assembled onto the same scaffold
            separately, sequentially and quantitatively.
          </p>
          <p>
            The programmable backbone module thus encodes mechanics, adhesion,
            cell recognition and second-timescale gelation within a single
            primary sequence, and pre-installs two mutually orthogonal
            short-peptide interfaces along that same sequence. The properties of
            the scaffold and the assembly of function are thereby decoupled: the
            scaffold remains stable and computable, while function is appended,
            exchanged and iterated as standardized units.
          </p>
        </article>
      </div>
    </div>
  );
}
